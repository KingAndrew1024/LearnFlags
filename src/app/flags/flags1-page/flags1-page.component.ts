import { Component, OnInit } from '@angular/core';
import { ICountry } from 'src/model/ICountry';
import { ContinentType } from 'src/model/ICountryList';
import { CountriesService } from 'src/services/countries.service';

@Component({
  selector: 'app-flags1-page',
  templateUrl: './flags1-page.component.html',
  styleUrls: ['./flags1-page.component.scss'],
})
export class Flags1PageComponent implements OnInit {
  defaultHref = '/flags';

  correctCountry: ICountry;
  countryOptions: {
    correctIdx: number;
    correctCca2: string;
    options: ICountry[];
  };

  constructor(private countriesSrv: CountriesService) {
    this.countryOptions = this.countriesSrv.createCountryOptions();
    this.correctCountry =
      this.countryOptions.options[this.countryOptions.correctIdx];
  }

  ngOnInit() {}

  selectOption(country: ICountry) {
    if (country.cca2 === this.correctCountry.cca2) {
      console.log('!!!!!!!!!!!!! ACERTASTE !!!!!!!!!!!!!!');
    }
  }
}
