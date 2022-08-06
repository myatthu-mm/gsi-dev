import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/state/country/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  @Input() country!: Country;
  
  constructor() { }

  ngOnInit(): void {
  }

}
