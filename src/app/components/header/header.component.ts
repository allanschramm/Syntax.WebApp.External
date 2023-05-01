import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SyntaxService } from 'src/app/services/syntax.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  balance!: number;
  netWorth!: number;

  constructor(private authService: AuthService, private syntaxService: SyntaxService) {}
  
  ngOnInit(): void {
    this.syntaxService.getUserBalanceCurrentMonth(this.authService.getUserId()).subscribe((balance => {
      this.balance = balance;
    }));

    this.syntaxService.getUserNetWorth(this.authService.getUserId()).subscribe((netWorth => {
      this.netWorth = netWorth;
    }));
  }

  activeItem: string = 'home';

  setActive(item: string) {
    this.activeItem = item;
  }  

  logout(): void {
    this.authService.logout(); 
  }
}
