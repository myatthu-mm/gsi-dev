import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';
import { SearchUiComponent } from './components/search-ui/search-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    SearchUiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
