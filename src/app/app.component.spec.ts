import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountryQuery } from './state/country/country.query';
import { of } from 'rxjs';
import { Country } from './state/country/country.model';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { CountryService } from './state/country/country.service';
import { ScrollingModule,  } from '@angular/cdk/scrolling';
import { CountryStore } from './state/country/country.store';

export function findComponent<T>(
  fixture: ComponentFixture<T>,
  selector: string,
): DebugElement {
  return fixture.debugElement.query(By.css(selector));
}

describe('AppComponent', () => {
  let component: AppComponent;
  let countryQuery: CountryQuery;
  let countryService: CountryService;
  let countryStore: CountryStore;

  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        HttpClientTestingModule,
        ScrollingModule
      ],
      providers: [
        CountryQuery,
        CountryService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    countryQuery = TestBed.inject(CountryQuery);
    countryService = TestBed.inject(CountryService);
    countryStore = TestBed.inject(CountryStore);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display country list', done => {
    const mockCountry: Country = {
      id: 1,
      name: {
        common: 'Thailand'
      },
      capital: 'Bangkok',
      subregion: 'South-Eastern Asia',
      population: 69799978
    };
    // arrange
    spyOn(countryQuery, 'selectAll').and.returnValue(of([mockCountry]));
    fixture.detectChanges();
    // act
    component.countries$.subscribe(list => {
      // assert
      expect(list.length).toBe(1);
      done();
    })
  });

  it('should display no country list', () => {
    // arrange
    spyOn(countryQuery, 'selectAll').and.returnValue(of([]));
    countryStore.setLoading(false);
    fixture.detectChanges();
    const noDataFoundMessage = fixture.debugElement.query(By.css('.nodata'));
    // assert
    expect(noDataFoundMessage).not.toBeNull();
  });

  it('should call country list state on onInit', () => {
    // arrange
    const loadStateMethod = spyOn(countryService, 'get').and.callThrough();
    // act
    component.ngOnInit();
    fixture.detectChanges();
    // assert
    expect(loadStateMethod).toHaveBeenCalled();
  });
  

  
  


});
