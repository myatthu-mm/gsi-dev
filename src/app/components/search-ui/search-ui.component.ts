import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

type OS = 'Windows' | 'Mac';

@Component({
  selector: 'app-search-ui',
  templateUrl: './search-ui.component.html',
  styleUrls: ['./search-ui.component.scss']
})
export class SearchUiComponent {
  @Output() filterEvent = new EventEmitter<string>();
  searchTerm$ = new Subject<string>(); // purpose for distinct value check and search delay control

  constructor() {
    this.searchTerm$
      .pipe(distinctUntilChanged(),
        debounceTime(800))
      .subscribe(searchValue => this.filterEvent.emit(searchValue));
  }

  @ViewChild('searchInput') searchElement!: ElementRef;

  @HostListener('document:keydown', ["$event"])
  focusOnSearch($event: KeyboardEvent) {
    if ((this.OS === 'Mac' ? $event.metaKey : $event.ctrlKey) && $event.key === 'k') {
      $event.preventDefault();
      this.searchElement.nativeElement.focus();
    }
  }

  get OS(): OS {
    if (navigator.userAgent.indexOf("Win") != -1) {
      return 'Windows';
    }
    return 'Mac';
  }

  searchByName(value: string): void {
    this.searchTerm$.next(value.trim().toLowerCase());
  }

}
