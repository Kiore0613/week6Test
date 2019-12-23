import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  isOpen: boolean = false;
  imageUrlLog = 'https://logos-coches.com/wp-content/uploads/2018/04/Bugatti-logo.png';
  imageUrlCar = 'https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg';

  constructor() { }

  ngOnInit() {
  }

}
