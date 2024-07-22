import { Component, OnInit } from '@angular/core';
import { ICountry } from 'src/model/ICountry';
import { ContinentType } from 'src/model/ICountryList';
import { CountriesService } from 'src/services/countries.service';
interface IChecked {
  checked?: boolean;
}
@Component({
  selector: 'app-flags1-page',
  templateUrl: './flags1-page.component.html',
  styleUrls: ['./flags1-page.component.scss'],
})
export class Flags1PageComponent implements OnInit {
  overlay: HTMLElement = document.querySelector('#flag-overlay')!;

  defaultHref = '/flags';

  //! mock initialization
  correctCountry: ICountry = {
    capital: {
      en: '',
      es: '',
    },
    cca2: '  ',
    name: {
      en: '',
      es: '',
    },
    selected: false,
    timesPresented: 0,
    accumulatedScore: 0,
    percentage: 0,
  };
  options: (ICountry & IChecked)[] = [];
  attempts = 0;
  debouncing = false;

  constructor(private countriesSrv: CountriesService) {
    this.getNewFlagSet();
  }

  ngOnInit() {
    console.log('init Flags1PageComponent');
  }

  selectOption(img: HTMLElement, country: ICountry & IChecked) {
    if (this.debouncing) return;

    if (!country.checked) {
      country.checked = true;
      this.attempts++;
    }

    this.showFlagOverlay(img);

    if (country.cca2 === this.correctCountry.cca2) {
      this.debouncing = true;
      this.overlay.classList.add('success');
      this.overlay.classList.remove('fail');

      country.accumulatedScore += 1 / this.attempts;
      country.percentage = +(
        (country.accumulatedScore / country.timesPresented) *
        100
      ).toFixed(2.2);

      delete country.checked;
      this.countriesSrv.updateCountry(country);

      setTimeout(() => {
        this.overlay.style.display = 'none';
        this.getNewFlagSet();
        this.debouncing = false;
      }, 1000);
    } else {
      this.overlay.classList.add('fail');
      this.overlay.classList.remove('success');
      setTimeout(() => {
        this.overlay.style.display = 'none';
      }, 1000);
    }
  }

  getNewFlagSet() {
    this.attempts = 0;

    const countryOptions: {
      correctIdx: number;
      correctCca2: string;
      options: ICountry[];
    } = this.countriesSrv.createCountryOptions();
    this.options = countryOptions.options.map((c) => ({
      ...c,
      checked: false,
    }));

    this.options[countryOptions.correctIdx].timesPresented++;
    this.correctCountry = countryOptions.options[countryOptions.correctIdx];

    /* console.log(countryOptions);
    console.log(this.options); */
  }
  showFlagOverlay(img: HTMLElement, show = true) {
    const viewportOffset = img.getBoundingClientRect();

    this.overlay.style.left = viewportOffset.left + 'px';
    this.overlay.style.top = viewportOffset.top + 'px';
    this.overlay.style.width = viewportOffset.width + 'px';
    this.overlay.style.height = viewportOffset.height + 'px';
    this.overlay.style.display = 'flex';
  }
}
