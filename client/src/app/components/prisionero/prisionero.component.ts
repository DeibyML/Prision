import { Component, OnInit } from '@angular/core';
import { PrisioneroService } from '../../services/prisionero.service';
import { Prisionero } from '../../models/prisionero';

@Component({
  selector: 'app-prisionero-component',
  templateUrl: './prisionero.component.html'
})
export class PrisioneroComponent implements OnInit {

  prisioneros: Prisionero[] = [];

  constructor(private prisioneroService: PrisioneroService) { }

  ngOnInit() {
    this.prisioneroService.getPrisioneros()
        .subscribe((pris: Prisionero[]) => {
          this.prisioneros = pris;
        });
  }

}
