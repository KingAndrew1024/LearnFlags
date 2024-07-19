import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Config', url: '/config', icon: 'paper-plane' },
    { title: 'Banderas', url: '/flags', icon: 'paper-plane' },
    { title: 'Capitales', url: '/capitals', icon: 'paper-plane' },
  ];
  constructor() {}
}

//https://restcountries.com/#endpoints-language
//https://flagpedia.net/download/api
