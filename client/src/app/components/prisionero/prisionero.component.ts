import { Component, OnInit } from '@angular/core';
import { PrisioneroService } from '../../services/prisionero.service';
import { Prisionero } from '../../models/prisionero';
import * as moment from 'moment';
moment.locale('es');
declare var M;

@Component({
  selector: 'app-prisionero-component',
  templateUrl: './prisionero.component.html'
})
export class PrisioneroComponent implements OnInit {

  prisioneros: Prisionero[] = [];

  constructor(private prisioneroService: PrisioneroService) { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      M.Modal.init(document.querySelectorAll('.modal'));
    });

    this.getAllPrisioneros();


  }

  // Método que llama al servicio para consultar todos los prisioneros.
  getAllPrisioneros() {
    this.prisioneroService.getPrisioneros()
        .subscribe((pris: Prisionero[]) => {
          for(let i = 0; i < pris.length; i++) {
            pris[i].FechaNac = moment(pris[i].FechaNac).format('MMMM Do YYYY');
          }
          this.prisioneros = pris;
        });
  }

  // Método que llama al servicio para crear un nuevo prisionero.
  createPrisionero(prisionero) {

    this.prisioneroService.postPrisionero(prisionero)
    .subscribe((_: any) => {
      if (_.status === 200) {
        M.toast({html: '¡Prisionero creado correctamente!', classes: 'rounded'});
        this.getAllPrisioneros();
      }
    });

  }

}
