import { Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Country } from './state/country/country.model';
import { CountryQuery } from './state/country/country.query';
import { CountryService } from './state/country/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private countryService: CountryService, private countryQuery: CountryQuery) { }

  public countries$!: Observable<Country[]>;
  public loading$!: Observable<boolean>;

  ngOnInit(): void {
    this.countries$ = this.countryQuery.selectAll();
    this.loading$ = this.countryQuery.selectLoading();
    this.getCountries();
  }

  private getCountries(): void {
    this.countryService.get();
  }

  onFilter(query: string): void {
    this.countries$ = this.countryQuery.selectAll({
      filterBy: [
        (entity: Country) => entity.name.common.toLowerCase().includes(query)
      ]
    });
  }

}
