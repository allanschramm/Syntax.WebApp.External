import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-finance-sidebar',
  templateUrl: './finance-sidebar.component.html',
  styleUrls: ['./finance-sidebar.component.css']
})
export class FinanceSidebarComponent {

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout(); 
  }
  
}
