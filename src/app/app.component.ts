import { Component } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  date = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  Date: Date;

  constructor() {
    setInterval(() => {
      this.Date = new Date();
    }, 1000);
  }
}
