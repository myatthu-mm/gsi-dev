import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Country } from 'src/app/state/country/country.model';

import { CountryComponent } from './country.component';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render data', () => {
    // arrange
    const mockCountry: Country = {
      id: 1,
      name: {
        common: 'Thailand'
      },
      capital: 'Bangkok',
      subregion: 'South-Eastern Asia',
      population: 69799978
    };
    // act
    component.country = mockCountry;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // assert
    expect(compiled.querySelector('.country-name').textContent).toContain('Thailand');
    expect(compiled.querySelector('.capital').textContent).toContain('Bangkok');
    expect(compiled.querySelector('.subregion').textContent).toContain('South-Eastern Asia');
    expect(compiled.querySelector('.population').textContent).toContain('69799978');
  });
  
});
