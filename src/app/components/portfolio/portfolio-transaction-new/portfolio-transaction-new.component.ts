import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Asset } from 'src/app/models/asset';
import { AssetPortfolio } from 'src/app/models/asset-portfolio';
import { Portfolio } from 'src/app/models/portfolio';
import { SyntaxService } from 'src/app/services/syntax.service';

@Component({
  selector: 'app-portfolio-transaction-new',
  templateUrl: './portfolio-transaction-new.component.html',
  styleUrls: ['./portfolio-transaction-new.component.css']
})
export class PortfolioTransactionNewComponent implements OnInit {
  
  assetPortfolioForm!: FormGroup;
  assetList: Asset[] = []; // Array para armazenar os ativos vindos da API
  portfolioList: Portfolio[] = []; // Array para armazenar as carteiras vindas da API
  
  constructor(private formBuilder: FormBuilder, private syntaxService: SyntaxService, private router: Router) {}
  
  ngOnInit(): void {
    this.assetPortfolioForm = this.formBuilder.group({
      idAsset: [''],
      quantity: [''],
      purchasePrice: [''],
      type: [''],
      date: [''],
      idPortfolio: ['']
    });

    // Chame os métodos para obter a lista de ativos e carteiras da API
    this.syntaxService.getAssetList().subscribe(
      (assets: Asset[]) => {
        this.assetList = assets;
      },
      (error: any) => {
        console.error('Erro ao obter a lista de ativos:', error);
      }
    );

    this.syntaxService.getPortfolioList().subscribe(
      (portfolios: Portfolio[]) => {
        this.portfolioList = portfolios;
      },
      (error: any) => {
        console.error('Erro ao obter a lista de carteiras:', error);
      }
    );
  }

  onSubmit() {
    const assetPortfolio = this.assetPortfolioForm.value as AssetPortfolio;
    this.syntaxService.postAssetPortfolio(assetPortfolio)
    .subscribe(
      () => {
        this.router.navigate(['/portfolio/transaction']);
      })
  }

  voltar() : void {
    this.router.navigate(['/portfolio/transaction']);
  }

}
