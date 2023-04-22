import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}  
  
  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      // Redirecionar para a página de login
      this.router.navigate(['/login']);
    }
  }

}
