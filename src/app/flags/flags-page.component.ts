import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flags-page',
  templateUrl: './flags-page.component.html',
  styleUrls: ['./flags-page.component.scss'],
})
export class FlagsPageComponent implements OnInit {
  cards = [
    {
      title: 'Banderas 1',
      image: './assets/app-images/flags.png',
      link: '1',
      description: 'Dado el nombre del país, selecciona la bandera corecta',
    },
    /* { title: 'Banderas 2', image: '', link: '2', description: '' },
    { title: 'Banderas 3', image: '', link: '3', description: '' },
    { title: 'Banderas 4', image: '', link: '4', description: '' },
    { title: 'Banderas 5', image: '', link: '5', description: '' },
    { title: 'Banderas 6', image: '', link: '6', description: '' },
    { title: 'Banderas 7', image: '', link: '7', description: '' }, */
  ];

  constructor() {}

  ngOnInit() {}
}
