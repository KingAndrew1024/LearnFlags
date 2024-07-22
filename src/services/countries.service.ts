import { Injectable } from '@angular/core';
import { COUNTRIES } from 'src/assets/countries';
import { ICountry } from 'src/model/ICountry';
import { ContinentType, CountryListType } from 'src/model/ICountryList';

Injectable({
  providedIn: 'root',
});
export class CountriesService {
  private _countries: CountryListType;
  private _numOfCountries: 2 | 3 | 4 | 5 = 3;
  private numOfContinents: 1 | 2 | 3 | 4 | 5 = 5;

  constructor() {
    if (!localStorage.getItem('countries')) {
      localStorage.setItem('countries', JSON.stringify(COUNTRIES));
      this._countries = COUNTRIES;
    } else {
      this._countries = JSON.parse(localStorage.getItem('countries') as string);
    }
  }

  get countries() {
    return this._countries;
  }

  get numOfCountries() {
    return this._numOfCountries;
  }

  getSelectedFlags() {
    const selectedFlags: any = {};
    Object.keys(this._countries).forEach((continent) => {
      const continent2: ContinentType = continent as ContinentType;
      selectedFlags[continent] = {};
      Object.keys(this._countries[continent2]).forEach((countryCode) => {
        if (this._countries[continent2][countryCode].selected) {
          selectedFlags[continent][countryCode] =
            this._countries[continent2][countryCode];
        }
      });
    });

    Object.keys(selectedFlags).forEach((continent) => {
      if (Object.keys(selectedFlags[continent]).length === 0) {
        delete selectedFlags[continent];
      }
    });

    return selectedFlags as CountryListType;
  }

  selectCountry(
    continent: ContinentType,
    countryCode: string,
    selected: boolean
  ) {
    this._countries[continent][countryCode].selected = selected;
    localStorage.setItem('countries', JSON.stringify(this.countries));
  }

  selectRandomContinents(length: 1 | 2 | 3 | 4 | 5) {
    const selectedFlags = this.getSelectedFlags();
    const continents = Object.keys(selectedFlags) as ContinentType[];

    const selectedContinents: ContinentType[] = [];
    while (selectedContinents.length < length) {
      const continent = continents[this.getRandomInteger(length)];
      if (!selectedContinents.includes(continent)) {
        selectedContinents.push(continent);
      }
    }

    return selectedContinents;
  }

  selectRandomCountry(selectedContinent: ContinentType) {
    const selectedFlags = this.getSelectedFlags();
    const countries = Object.keys(selectedFlags[selectedContinent]);
    const randomIndex = this.getRandomInteger(countries.length);

    const selectedCountryCode = countries[randomIndex];

    const selectedCountry = selectedFlags[selectedContinent][
      selectedCountryCode
    ] as ICountry;

    return selectedCountry;
  }

  createCountryOptions() {
    const optionsOutput: {
      correctIdx: number;
      correctCca2: string;
      options: ICountry[];
    } = {
      correctIdx: -1,
      correctCca2: '',
      options: [],
    };

    //example if numOfContinents = 3, then otputs sth like this ['America', 'Europe', 'Africa']

    const continents = this.selectRandomContinents(this.numOfContinents);

    let continentSet = new Set<ContinentType>();

    while (continentSet.size < this.numOfCountries) {
      continentSet.add(continents[this.getRandomInteger(this.numOfContinents)]);
    }
    const selectedContinents = Array.from(continentSet);

    // 0, 1, 2 etc
    const selectedContinentIdx = this.getRandomInteger(this.numOfCountries);

    // 'America'
    const selectedContinentName = selectedContinents[
      selectedContinentIdx
    ] as ContinentType;

    selectedContinents.forEach((continent) => {
      let country = this.selectRandomCountry(continent);
      let counter = 0;

      while (
        optionsOutput.options.filter((c) => {
          return c.cca2 == country.cca2;
        }).length &&
        counter < 30
      ) {
        country = this.selectRandomCountry(continent);
        counter++;
      }
      optionsOutput.options.push(country);
    });

    optionsOutput.correctIdx = selectedContinentIdx;

    return optionsOutput;
  }

  private getRandomInteger(max: number) {
    return Math.floor(Math.random() * max);
  }
}
