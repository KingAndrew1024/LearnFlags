import { Component, OnInit } from '@angular/core';
import { ICountry } from 'src/model/ICountry';
import {
  CountryOptions,
  CountriesService,
} from 'src/services/countries.service';

@Component({
  selector: 'app-capitals1-page',
  templateUrl: './capitals1-page.component.html',
  styleUrls: ['./capitals1-page.component.scss'],
})
export class Capitals1PageComponent implements OnInit {
  defaultHref = '/capitals';
  overlay: HTMLElement = document.querySelector('#flag-overlay')!;

  options: CountryOptions[] = [];
  correctCountry: ICountry;

  hintShown = false;

  constructor(private countriesSrv: CountriesService) {
    const opts = this.countriesSrv.getNewFlagSet();
    this.options = opts.options;

    this.correctCountry = opts.correctCountry;
    console.log(this.correctCountry);
  }

  ngOnInit() {
    console.log('init Flags1PageComponent');
  }

  selectOption(img: HTMLElement, country: CountryOptions) {
    this.countriesSrv.selectOption(img, country, this.overlay).then(() => {
      const opts = this.countriesSrv.getNewFlagSet();
      this.options = opts.options;
      this.correctCountry = opts.correctCountry;
      this.hintShown = false;
    });
  }

  toggleHint() {
    this.hintShown = !this.hintShown;
  }
}
