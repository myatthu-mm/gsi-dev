import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchUiComponent } from './search-ui.component';

describe('SearchUiComponent', () => {
  let component: SearchUiComponent;
  let fixture: ComponentFixture<SearchUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchUiComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire output value', fakeAsync(() => {
    // arrange
    spyOn(component.filterEvent, 'emit');
    component.searchTerm$.next('myanmar');
    // act
    component.searchByName('thailand');
    tick(800);
    // assert
    expect(component.filterEvent.emit).toHaveBeenCalled();
  }));

  it('should not fire duplicate output value', () => {
    // arrange
    spyOn(component.filterEvent, 'emit');
    component.searchTerm$.next('thailand');
    // act
    component.searchByName('thailand');
    // assert
    expect(component.filterEvent.emit).not.toHaveBeenCalled();
  });

  it('should focus on search input when hot key press', () => {
    // arrange
    spyOn(component.searchElement.nativeElement, 'focus');
    // act
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, ctrlKey: true }));
    // assert
    expect(component.searchElement.nativeElement.focus).toHaveBeenCalled();
  });


});
