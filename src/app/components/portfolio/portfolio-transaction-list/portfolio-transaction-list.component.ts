import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from 'src/app/models/asset';
import { AssetClass } from 'src/app/models/asset-class';
import { AssetPortfolio } from 'src/app/models/asset-portfolio';
import { Portfolio } from 'src/app/models/portfolio';
import { SyntaxService } from 'src/app/services/syntax.service';

@Component({
  selector: 'app-portfolio-transaction-list',
  templateUrl: './portfolio-transaction-list.component.html',
  styleUrls: ['./portfolio-transaction-list.component.css']
})
export class PortfolioTransactionListComponent implements OnInit {
  assetPortfolioList$!: Observable<AssetPortfolio[]>;
  assetList$!: Asset[];
  assetClassList$!: AssetClass[];
  portfolioList$!: Portfolio[];
  p: number = 1;
  
  constructor(private syntaxService: SyntaxService) { }

  ngOnInit(): void {
    this.assetPortfolioList$ = this.syntaxService.getAssetPortfolioList();

    this.syntaxService.getAssetList().subscribe(assetList => {
      this.assetList$ = assetList;  
    });

    this.syntaxService.getAssetClassList().subscribe(assetClassList => {
      this.assetClassList$ = assetClassList;  
    });

    this.syntaxService.getPortfolioList().subscribe(portfolioList => {
      this.portfolioList$ = portfolioList;
    });
  }

  getAssetName(idAsset: number): string {
    const category = this.assetList$.find(c => c.id === idAsset);
    return category ? category.name : '';
  }

  getAssetClassName(idAsset: number): string {
    const asset = this.assetList$.find(a => a.id === idAsset);
    if (asset) {
      const assetClass = this.assetClassList$.find(c => c.id === asset.idAssetClass);
      return assetClass ? assetClass.name : '';
    }
    return '';
  }

  getPortfolioName(idPortfolio: number): string {
    const category = this.portfolioList$.find(c => c.id === idPortfolio);
    return category ? category.name : '';
  }
}
