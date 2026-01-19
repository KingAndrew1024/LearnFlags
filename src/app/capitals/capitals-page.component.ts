import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capitals-page',
  templateUrl: './capitals-page.component.html',
  styleUrls: ['./capitals-page.component.scss'],
})
export class CapitalsPageComponent implements OnInit {
  cards = [
    {
      title: 'Capitales 1',
      image: './assets/app-images/flags.png',
      link: '1',
      description: 'Dado el nombre del país, selecciona la capital corecta',
    },
    /* { title: 'Capitales 2', image: '', link: '2', description: '' },
    { title: 'Capitales 3', image: '', link: '3', description: '' },
    { title: 'Capitales 4', image: '', link: '4', description: '' },
    { title: 'Capitales 5', image: '', link: '5', description: '' },
    { title: 'Capitales 6', image: '', link: '6', description: '' },
    { title: 'Capitales 7', image: '', link: '7', description: '' }, */
  ];

  constructor() {}

  ngOnInit() {}
}
