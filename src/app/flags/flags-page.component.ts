import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flags-page',
  templateUrl: './flags-page.component.html',
  styleUrls: ['./flags-page.component.scss'],
})
export class FlagsPageComponent implements OnInit {
  cards = [
    { title: 'Banderas 1', image: '', link: '1' },
    { title: 'Banderas 2', image: '', link: '2' },
    { title: 'Banderas 3', image: '', link: '3' },
    { title: 'Banderas 4', image: '', link: '4' },
    { title: 'Banderas 5', image: '', link: '5' },
    { title: 'Banderas 6', image: '', link: '6' },
    { title: 'Banderas 7', image: '', link: '7' },
  ];

  constructor() {}

  ngOnInit() {}
}
