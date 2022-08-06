import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gsi-dev';
  list = Array(300).fill('Thailand');
  @ViewChild('search') searchElement!: ElementRef;

  @HostListener('document:keydown.meta.k')
  focusOnSearch() {
    this.searchElement.nativeElement.focus();
  }
}
