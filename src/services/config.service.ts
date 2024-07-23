import { Injectable } from '@angular/core';
import { CountriesService } from './countries.service';
import { ContinentType, CountryListType } from 'src/model/ICountryList';

Injectable({
  providedIn: 'root',
});
export class ConfigService {
  constructor(private countriesSvc: CountriesService) {}

  toggleCountry(
    continent: ContinentType,
    countryCode: string,
    selected: boolean
  ) {
    this.countriesSvc.countries[continent][countryCode].selected = selected;
    this.countriesSvc.setCountryList(this.countriesSvc.countries);
  }

  updateCountryList(countryList: CountryListType) {
    this.countriesSvc.setCountryList(countryList);
  }
}
