import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContinentType, CountryListType } from 'src/model/ICountryList';
import { CountriesService } from 'src/services/countries.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {
  public countries: CountryListType;
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  continentState: {
    [k: string]: { checked: boolean; indeterminateState: boolean };
  } = {
    America: { checked: false, indeterminateState: false },
    Europe: { checked: false, indeterminateState: false },
    Africa: { checked: false, indeterminateState: false },
    Asia: { checked: false, indeterminateState: false },
    Oceania: { checked: false, indeterminateState: false },
    Antarctica: { checked: false, indeterminateState: false },
  };
  constructor(private countriesSrv: CountriesService) {
    this.countries = this.countriesSrv.countries;
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.initContinentState();
  }

  private initContinentState() {
    Object.keys(this.countries).forEach((continent) => {
      this.updateContinentState(continent as ContinentType);
    });
  }

  private updateContinentState(continent: ContinentType) {
    const totalCountries = Object.keys(
      this.countries[continent as ContinentType]
    ).length;
    const continentCountries = this.countriesSrv.getSelectedFlags()[continent];
    const selectedCountriesLength = Object.keys(
      continentCountries || {}
    ).length;

    this.continentState[continent].checked =
      selectedCountriesLength == totalCountries;
    this.continentState[continent].indeterminateState =
      selectedCountriesLength > 0 && selectedCountriesLength < totalCountries;
  }

  selectCountry(continent: string, countryCode: string, selected: boolean) {
    this.countriesSrv.selectCountry(
      continent as ContinentType,
      countryCode,
      selected
    );

    this.updateContinentState(continent as ContinentType);
  }

  checkContinent(key: string) {
    Object.keys(this.countries[key as ContinentType]).forEach((countryCode) => {
      this.countriesSrv.selectCountry(
        key as ContinentType,
        countryCode,
        !this.continentState[key].checked
      );
    });
    this.continentState[key].indeterminateState = false;
  }
}
