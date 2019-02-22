import { Component, OnInit } from '@angular/core';
import { CondenaService } from '../../services/condena.service';
import * as moment from 'moment';
import { Condena } from '../../models/condena';
moment.locale('es');
declare var M;


@Component({
  selector: 'app-condena',
  templateUrl: './condena.component.html',
  styles: []
})
export class CondenaComponent implements OnInit {
  condenas: Condena[] = [];
  constructor(private condenaService: CondenaService) { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      // M.Modal.init(document.querySelectorAll('.modal'));
      M.Modal.init(document.querySelector('.modal'));
    });

    this.getAllCondenas();

  }

  // Método que llama al servicio para consultar todos las condenas.
  getAllCondenas() {
    this.condenaService.getCondenas()
        .subscribe((conds: Condena[]) => {
          for (let i = 0; i < conds.length; i++) {
            conds[i].Duracion = moment.duration(moment(conds[i].FinalCondena).diff(moment(conds[i].InicioCondena))).asDays().toString();
          }
          this.condenas = conds;
        });
  }

  // Método que llama al servicio para crear una nueva condena.
  createCondena(condena) {

    this.condenaService.postCondena(condena)
    .subscribe((_: any) => {
      if (_.status === 200) {
        M.toast({html: '¡Condena creada correctamente!', classes: 'rounded'});
        this.getAllCondenas();
      }
    });

  }

}
