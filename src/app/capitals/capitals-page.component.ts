import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capitals-page',
  templateUrl: './capitals-page.component.html',
  styleUrls: ['./capitals-page.component.scss'],
})
export class CapitalsPageComponent implements OnInit {
  cards = [
    { title: 'Capitales 1', image: '', link: '1' },
    { title: 'Capitales 2', image: '', link: '2' },
    { title: 'Capitales 3', image: '', link: '3' },
    { title: 'Capitales 4', image: '', link: '4' },
  ];

  constructor() {}

  ngOnInit() {}
}
