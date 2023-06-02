import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'olimpus-front';
  backgroundPage: any;
  ngOnInit() {
    // Get the background page element
    this.backgroundPage = document.querySelector('.background-page');
    // Add a scroll event listener to the background page
    this.backgroundPage.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    this.backgroundPage.addEventListener('scroll', this.onScroll.bind(this));
  }
}
