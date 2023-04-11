import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ComponentshowService } from './services/componentshow.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'syntax-app';
  constructor(
    public router: Router,
    public componentShowService: ComponentshowService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateHeaderAndFooter(event.url);
      }
    });
  }

  updateHeaderAndFooter(url: string): void {
    if (url === '/login' || url === '/register' || url === '/landing' || url === '/') {
      this.componentShowService.setHeaderAndFooter(false);
    } else {
      this.componentShowService.setHeaderAndFooter(true);
    }
  }
}
