import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-ui',
  templateUrl: './search-ui.component.html',
  styleUrls: ['./search-ui.component.scss']
})
export class SearchUiComponent implements OnInit {
  @Output() filterEvent = new EventEmitter<string>();
  searchTerm$ = new Subject<string>();

  constructor() {
    this.searchTerm$
      .pipe(debounceTime(800),
        distinctUntilChanged())
      .subscribe(searchValue => this.filterEvent.emit(searchValue));
  }

  @ViewChild('search') searchElement!: ElementRef;

  @HostListener('document:keydown.meta.k')
  focusOnSearch() {
    this.searchElement.nativeElement.focus();
  }

  ngOnInit(): void {
  }

  searchByName($event: Event): void {
    this.searchTerm$.next(($event.target as HTMLInputElement)?.value.trim().toLowerCase());
  }

}
