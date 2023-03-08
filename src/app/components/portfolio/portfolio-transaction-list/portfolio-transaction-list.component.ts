import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetPortfolio } from 'src/app/models/asset-portfolio';
import { SyntaxService } from 'src/app/services/syntax.service';

@Component({
  selector: 'app-portfolio-transaction-list',
  templateUrl: './portfolio-transaction-list.component.html',
  styleUrls: ['./portfolio-transaction-list.component.css']
})
export class PortfolioTransactionListComponent implements OnInit {
  assetPortfolioList$!: Observable<AssetPortfolio[]>;
    
  constructor(private assetPortfolioService: SyntaxService) { }

  ngOnInit(): void {
    this.assetPortfolioList$ = this.assetPortfolioService.getAssetPortfolioList();
  }
  
}
