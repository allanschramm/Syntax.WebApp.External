import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetPortfolio } from 'src/app/models/asset-portfolio';
import { SyntaxService } from 'src/app/services/syntax.service';

@Component({
  selector: 'app-portfolio-transaction',
  templateUrl: './portfolio-transaction.component.html',
  styleUrls: ['./portfolio-transaction.component.css']
})
export class PortfolioTransactionComponent {
  public transaction: AssetPortfolio[] = [];

  constructor(private router: Router, private syntaxService: SyntaxService) { }

  newTransaction() {
    this.router.navigate(['/portfolio/new']);
  }


}
