import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Country } from './country.model';
import { CountryStore } from './country.store';

@Injectable({ providedIn: 'root' })
export class CountryService {

  constructor(private countryStore: CountryStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all')
      .pipe(map(countries => countries.map((country, index) => Object.assign(country, { id: index }) )))
      .subscribe(countries => {
      this.countryStore.set(countries);
    });
  }

}
