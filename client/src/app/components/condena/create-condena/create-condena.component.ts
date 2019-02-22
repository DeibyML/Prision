import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Condena } from './../../../models/condena';
import { PrisioneroService } from '../../../services/prisionero.service'
import { Prisionero } from '../../../models/prisionero';
declare var M;

@Component({
  selector: 'app-create-condena',
  templateUrl: './create-condena.component.html'
})
export class CreateCondenaComponent implements OnInit {

  @Output() condenaCreated = new EventEmitter();
  condena: Condena = new Condena;
  prisioneros: Prisionero[] = [];
  prisioneroAct: any = '';
  jueces: any[] = ['Dr. Genaro Roy', 'Dr. Álvaro Uribe', 'Dr. Tarcisio Maya', 'Dr. Gustavo Petro', 'Dr. Emiliano Lopera'];
  juezAct: any = '';
  delitos: string[] = ['Terrorismo', 'Violación', 'Robo', 'Asesinato', 'Tráfico de drogas', 'Porte de armas'];
  delitoAct = '';

  constructor(private prisioneroService: PrisioneroService) { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
    });
    this.getAllPrisioneros();
  }

  async getAllPrisioneros() {
    await this.prisioneroService.getPrisioneros()
    .subscribe(_ => {
      this.prisioneros = _;
    });
  }

  setJuez(juez: any) {
    this.juezAct = juez;
  }

  setPrisionero(prisionr: any) {
    this.prisioneroAct = prisionr;
  }


  setDelito(delito: any) {
    this.delitoAct = delito;
  }

  createCondena() {
    this.condena.Duracion = (0).toString();
    this.condena.IdPrisionero = this.prisioneroAct;
    this.condena.IdJuez = this.juezAct;
    this.condena.IdTipoDelito = this.delitoAct;
    this.condena.FechaCondena = new Date().toString();
    this.condenaCreated.emit(this.condena);
  }


}
