import { Component, OnInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      M.Carousel.init(document.querySelectorAll('.carousel'));
    });
  }
}
