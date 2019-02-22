import { Component, OnInit } from '@angular/core';
import { PrisioneroService } from '../../services/prisionero.service';
import { Prisionero } from '../../models/prisionero';
declare var M;

@Component({
  selector: 'app-batallas',
  templateUrl: './batallas.component.html'
})
export class BatallasComponent implements OnInit {

  luchador1: any = '';
  luchador2: any = '';
  arma1 = '';
  arma2 = '';
  ganador: any = {};
  ambiente = '';
  luchando = false;
  prisioneros: Prisionero[] = [];
  prisionerosAll: Prisionero[] = [];
  armas: string[] = ['La motosierra de Uribe', 'Bayesta lanza huevos',
                    'Pistola de agua', 'Arma de rayo laser', 'El Guantele', 'Cauchera', 'Espada Samurai'];
  ambientes: string[] = ['Miel de oveja', 'Aceite de ballena', 'Piscina de orines', 'Lodo', 'Ácido sulfúrico'];

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

  setArma1(arma) {
    this.arma1 = arma;
  }

  setArma2(arma) {
    this.arma2 = arma;
  }

  setAmbiente(ambiente) {
    this.ambiente = ambiente;
  }

  luchar() {
    this.luchando = true;
    // this.ganador.arma;
    console.log(this.luchador1);
    console.log(this.luchador2);

    let fecha1 = new Date(this.luchador1.FechaNac);
    let fecha2 = new Date(this.luchador2.FechaNac);

    if (fecha1 > fecha2) {
      this.ganador.arma = this.arma1;
      this.ganador.nombre = this.luchador1.Nombres + ' ' + this.luchador1.Apellidos;
    } else {
      this.ganador.arma = this.arma2;
      this.ganador.nombre = this.luchador2.Nombres + ' ' + this.luchador2.Apellidos;
    }

    setTimeout(() => {
      this.luchando = false;
      M.toast({html: 'El ganador en del encuentro fue ' + this.ganador.nombre + ' con su arma ' + this.ganador.arma,
               classes: 'rounded',
               options: { displayLength: 6500}});

      setTimeout(() => {
      M.toast({html: '¡El escenario está listo para una nueva batalla!', classes: 'rounded'});
      location.reload();
      }, 2500);

    }, 3500);
  }

}
