import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from 'src/app/models/portfolio';
import { SyntaxService } from 'src/app/services/syntax.service';

@Component({
  selector: 'app-wallets-list',
  templateUrl: './wallets-list.component.html',
  styleUrls: ['./wallets-list.component.css']
})
export class WalletsListComponent implements OnInit {
  portfolioList$!: Observable<Portfolio[]>;
    
  constructor(private portfolioService: SyntaxService) { }

  ngOnInit(): void {
    this.portfolioList$ = this.portfolioService.getPortfolioList();
  }
}
