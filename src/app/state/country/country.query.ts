import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Country } from './country.model';
import { CountryStore, CountryState } from './country.store';

@Injectable({ providedIn: 'root' })
export class CountryQuery extends QueryEntity<CountryState> {

  constructor(protected override store: CountryStore) {
    super(store);
  }

}
