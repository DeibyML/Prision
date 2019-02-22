import { Component, OnInit } from '@angular/core';
import { PrisioneroService } from '../../services/prisionero.service';
import { Prisionero } from '../../models/prisionero';
declare var M;

@Component({
  selector: 'app-batallas',
  templateUrl: './batallas.component.html'
})
export class BatallasComponent implements OnInit {

  luchador1 = '';
  luchador2 = '';
  prisioneros: Prisionero[] = [];
  prisionerosAll: Prisionero[] = [];

  constructor(private prisioneroService: PrisioneroService) { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
    });
    this.getAllPrisioneros();
  }

  async getAllPrisioneros() {
    await this.prisioneroService.getPrisioneros()
    .subscribe((_: Prisionero[]) => {
      this.prisionerosAll = _;
      this.prisioneros = _.filter(_ => _.Sexo === 'Macho');
    });
  }

  changeSexo(genero) {
    this.luchador1 = '';
    this.luchador2 = '';

    this.prisioneros = this.prisionerosAll.filter(_ => _.Sexo === genero);
  }

  setLuchador1(luchador) {
    this.luchador1 = luchador;
  }

  setLuchador2(luchador) {
    this.luchador2 = luchador;
  }

}
