import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';
import { SearchUiComponent } from './components/search-ui/search-ui.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    SearchUiComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
