import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  
  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      // Redirecionar para a página de login
      this.router.navigate(['/login']);
    }
  }
  
}
