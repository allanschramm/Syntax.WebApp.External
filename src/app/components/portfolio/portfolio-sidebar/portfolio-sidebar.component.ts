import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-portfolio-sidebar',
  templateUrl: './portfolio-sidebar.component.html',
  styleUrls: ['./portfolio-sidebar.component.css']
})
export class PortfolioSidebarComponent {

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout(); 
  }
  
}
