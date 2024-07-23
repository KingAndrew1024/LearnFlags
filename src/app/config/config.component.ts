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

  public continentsState: {
    [k: string]: {
      checked: boolean;
      indeterminateState: boolean;
      totalSelected: number;
    };
  } = {
    America: { checked: false, indeterminateState: false, totalSelected: 0 },
    Europe: { checked: false, indeterminateState: false, totalSelected: 0 },
    Africa: { checked: false, indeterminateState: false, totalSelected: 0 },
    Asia: { checked: false, indeterminateState: false, totalSelected: 0 },
    Oceania: { checked: false, indeterminateState: false, totalSelected: 0 },
    Antartica: { checked: false, indeterminateState: false, totalSelected: 0 },
  };
  constructor(private countriesSrv: CountriesService) {
    this.countries = this.countriesSrv.countries;
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.initContinentState();
  }

  private initContinentState() {
    const allSelectedCountries = this.countriesSrv.getSelectedCountries();

    Object.keys(this.countries).forEach((continent) => {
      this.defineContinentsState(
        allSelectedCountries,
        continent as ContinentType
      );
    });
  }

  private defineContinentsState(
    allSelectedCountries: CountryListType,
    continentName: ContinentType
  ) {
    const totalCountriesInContinent = Object.keys(
      this.countries[continentName as ContinentType]
    ).length;

    const continentCountries = allSelectedCountries[continentName];

    const selectedCountriesLength = Object.keys(
      continentCountries || {}
    ).length;

    this.continentsState[continentName].totalSelected = selectedCountriesLength;

    this.continentsState[continentName].checked =
      selectedCountriesLength == totalCountriesInContinent;

    this.continentsState[continentName].indeterminateState =
      selectedCountriesLength > 0 &&
      selectedCountriesLength < totalCountriesInContinent;
  }

  toggleCountry(continentName: string, countryCode: string, selected: boolean) {
    this.countriesSrv.toggleCountry(
      continentName as ContinentType,
      countryCode,
      selected
    );

    this.continentsState[continentName].totalSelected += selected ? 1 : -1;

    const totalCountriesInContinent = Object.keys(
      this.countries[continentName as ContinentType]
    ).length;

    const totalSelected = this.continentsState[continentName].totalSelected;

    if (totalSelected > 0 && totalSelected < totalCountriesInContinent) {
      this.continentsState[continentName].indeterminateState = true;
      this.continentsState[continentName].checked = false;
    } else {
      this.continentsState[continentName].indeterminateState = false;
      if (totalSelected == totalCountriesInContinent) {
        this.continentsState[continentName].checked = true;
      }
    }
  }

  toggleContinent(continentName: string) {
    Object.keys(this.countries[continentName as ContinentType]).forEach(
      (countryCode) => {
        this.countries[continentName as ContinentType][countryCode].selected =
          !this.continentsState[continentName].checked;
      }
    );

    this.countriesSrv.setCountryList(this.countries);

    this.continentsState[continentName].indeterminateState = false;

    this.continentsState[continentName].totalSelected = 0;

    //checks the prevoius checkbox state
    if (!this.continentsState[continentName].checked) {
      const len = Object.keys(
        this.countries[continentName as ContinentType]
      ).length;
      this.continentsState[continentName].totalSelected = len;
    }
  }
}
