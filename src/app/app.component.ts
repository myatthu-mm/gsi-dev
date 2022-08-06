import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gsi-dev';
  list = Array.from({length: 300}).map((_, i) => `Item #${i}`);
}
