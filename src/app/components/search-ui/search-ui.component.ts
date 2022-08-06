import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-ui',
  templateUrl: './search-ui.component.html',
  styleUrls: ['./search-ui.component.scss']
})
export class SearchUiComponent implements OnInit {

  constructor() { }

  @ViewChild('search') searchElement!: ElementRef;

  @HostListener('document:keydown.meta.k')
  focusOnSearch() {
    this.searchElement.nativeElement.focus();
  }

  ngOnInit(): void {
  }

}
