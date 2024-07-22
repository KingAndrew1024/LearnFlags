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

  overlay: HTMLElement = document.querySelector('#flag-overlay')!;

  constructor(private countriesSrv: CountriesService) {
    this.countryOptions = this.countriesSrv.createCountryOptions();
    console.log(this.countryOptions);

    this.correctCountry =
      this.countryOptions.options[this.countryOptions.correctIdx];
  }

  ngOnInit() {
    console.log('init Flags1PageComponent');
  }

  selectOption(img: HTMLElement, country: ICountry) {
    this.showFlagOverlay(img);
    if (country.cca2 === this.correctCountry.cca2) {
      this.overlay.classList.add('success');
      this.overlay.classList.remove('fail');
      setTimeout(() => {
        this.overlay.style.display = 'none';
        this.getNewFlagSet();
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
    this.countryOptions = this.countriesSrv.createCountryOptions();
    this.correctCountry =
      this.countryOptions.options[this.countryOptions.correctIdx];
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
