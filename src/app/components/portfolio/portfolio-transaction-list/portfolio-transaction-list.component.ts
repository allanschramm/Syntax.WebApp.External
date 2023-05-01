import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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
  
    combineLatest([
      this.syntaxService.getAssetList(),
      this.syntaxService.getAssetClassList(),
      this.syntaxService.getPortfolioList()
    ]).pipe(
      switchMap(([assetList, assetClassList, portfolioList]) => {
        this.assetList$ = assetList;  
        this.assetClassList$ = assetClassList;  
        this.portfolioList$ = portfolioList;
        return of(null);
      })
    ).subscribe();
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
