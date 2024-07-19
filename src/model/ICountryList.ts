import { ICountry } from './ICountry';

export type ContinentType =
  | 'America'
  | 'Europe'
  | 'Africa'
  | 'Asia'
  | 'Oceania'
  | 'Antarctica';

export type CountryListType = {
  [k in ContinentType]: { [k2: string]: ICountry };
};
