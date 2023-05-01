import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from 'src/app/models/portfolio';
import { AuthService } from 'src/app/services/auth.service';
import { SyntaxService } from 'src/app/services/syntax.service';

@Component({
  selector: 'app-wallets-list',
  templateUrl: './wallets-list.component.html',
  styleUrls: ['./wallets-list.component.css']
})
export class WalletsListComponent implements OnInit {
  portfolioList$!: Observable<Portfolio[]>;

  p: number = 1;
    
  constructor(private syntaxService: SyntaxService, private authService: AuthService) { }

  ngOnInit(): void {
    this.portfolioList$ = this.syntaxService.getPortfolioList(this.authService.getUserId());
  }
}
