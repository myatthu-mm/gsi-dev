import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';
import { SearchUiComponent } from './components/search-ui/search-ui.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { LetterOnlyDirective } from './shared/directives/letter-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    SearchUiComponent,
    LetterOnlyDirective
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
