import { Component, OnInit } from '@angular/core';
import { ICountry } from 'src/model/ICountry';
import { ContinentType } from 'src/model/ICountryList';
import {
  CountriesService,
  CountryOptions,
  IChecked,
  IGameOptions,
} from 'src/services/countries.service';

@Component({
  selector: 'app-flags1-page',
  templateUrl: './flags1-page.component.html',
  styleUrls: ['./flags1-page.component.scss'],
})
export class Flags1PageComponent implements OnInit {
  overlay: HTMLElement = document.querySelector('#flag-overlay')!;

  defaultHref = '/flags';

  options: CountryOptions[] = [];
  correctCountry: ICountry;

  constructor(private countriesSrv: CountriesService) {
    const opts = this.countriesSrv.getNewFlagSet();
    this.options = opts.options;
    this.correctCountry = opts.correctCountry;
  }

  ngOnInit() {
    console.log('init Flags1PageComponent');
  }

  selectOption(img: HTMLElement, country: CountryOptions) {
    this.countriesSrv.selectOption(img, country, this.overlay).then(() => {
      const opts = this.countriesSrv.getNewFlagSet();
      this.options = opts.options;
      this.correctCountry = opts.correctCountry;
    });
  }
}
