import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthService) {}

  activeItem: string = 'home';

  setActive(item: string) {
    this.activeItem = item;
  }


  logout(): void {
    this.authService.logout(); 
  }
}
