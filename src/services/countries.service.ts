import { Injectable } from '@angular/core';
import { COUNTRIES } from 'src/assets/countries';
import { ICountry } from 'src/model/ICountry';
import { ContinentType, CountryListType } from 'src/model/ICountryList';

export interface IGameOptions {
  correctIdx: number;
  correctCca2: string;
  options: ICountry[];
}

Injectable({
  providedIn: 'root',
});
export class CountriesService {
  private _countriesList: CountryListType;
  private _numOfCountries: 2 | 3 | 4 | 5 = 3;
  private numOfContinents: 1 | 2 | 3 | 4 | 5 = 5;
  private selectedContinentName?: ContinentType;

  constructor() {
    if (!localStorage.getItem('countries')) {
      this.setCountryList(COUNTRIES);
      this._countriesList = COUNTRIES;
    } else {
      this._countriesList = JSON.parse(
        localStorage.getItem('countries') as string
      );
    }
  }

  private reloadCountries() {
    this._countriesList = JSON.parse(localStorage.getItem('countries')!);
  }

  get countries() {
    return this._countriesList;
  }

  get numOfCountries() {
    return this._numOfCountries;
  }

  /**
   *
   * @returns All selected countries in all continents
   */
  getSelectedCountries(): CountryListType {
    const selectedCountriesMap: any = {};
    Object.keys(this._countriesList).forEach((continent) => {
      const continent2: ContinentType = continent as ContinentType;
      selectedCountriesMap[continent2] = {};
      Object.keys(this._countriesList[continent2]).forEach((countryCode) => {
        if (this._countriesList[continent2][countryCode].selected) {
          selectedCountriesMap[continent2][countryCode] =
            this._countriesList[continent2][countryCode];
        }
      });
    });

    Object.keys(selectedCountriesMap).forEach((continent) => {
      if (Object.keys(selectedCountriesMap[continent]).length === 0) {
        delete selectedCountriesMap[continent];
      }
    });

    return selectedCountriesMap as CountryListType;
  }

  toggleCountry(
    continent: ContinentType,
    countryCode: string,
    selected: boolean
  ) {
    this._countriesList[continent][countryCode].selected = selected;
    this.setCountryList(this._countriesList);
  }

  selectRandomContinents(length: 1 | 2 | 3 | 4 | 5) {
    const allSelectedCountries = this.getSelectedCountries();
    const continents = Object.keys(allSelectedCountries) as ContinentType[];

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
    const selectedFlags = this.getSelectedCountries();
    const countries = Object.keys(selectedFlags[selectedContinent]);
    const randomIndex = this.getRandomInteger(countries.length);

    const selectedCountryCode = countries[randomIndex];

    const selectedCountry = selectedFlags[selectedContinent][
      selectedCountryCode
    ] as ICountry;

    return selectedCountry;
  }

  createCountryOptions(): IGameOptions {
    const optionsOutput: IGameOptions = {
      correctIdx: -1,
      correctCca2: '',
      options: [],
    };

    this.reloadCountries();

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
    this.selectedContinentName = selectedContinents[
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

  updateCountry(country: ICountry) {
    const currentCountries: CountryListType = JSON.parse(
      localStorage.getItem('countries')!
    );

    currentCountries[this.selectedContinentName!][country.cca2] = country;

    this.setCountryList(currentCountries);
  }

  setCountryList(countryList: CountryListType) {
    localStorage.setItem('countries', JSON.stringify(countryList));
  }

  private getRandomInteger(max: number) {
    return Math.floor(Math.random() * max);
  }
}
