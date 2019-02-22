import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Prisionero } from '../../../models/prisionero';
declare var M;

@Component({
  selector: 'app-create-prisionero',
  templateUrl: './create-prisionero.component.html'
})
export class CreatePrisioneroComponent implements OnInit {


  @Output() prisioneroCreated = new EventEmitter();
  prisionero: Prisionero = new Prisionero;
  razaAct: any = '';
  razas: any[] = ['Asiatico', 'Blanco', 'Mestizo', 'Negro', 'Indigena'];

  constructor() { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      // M.Datepicker.init(document.querySelectorAll('.datepicker'));
      M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
    });
  }

  createPrisionero() {
    this.prisionero.Libre = false;
    this.prisionero.Celda = 'celdaPrueba';
    this.prisioneroCreated.emit(this.prisionero);
  }

  setRaza(raza: any) {
    this.razaAct = raza;
    this.prisionero.Raza = raza;
  }

}
