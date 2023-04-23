import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Asset } from 'src/app/models/asset';
import { AssetPortfolio } from 'src/app/models/asset-portfolio';
import { Portfolio } from 'src/app/models/portfolio';
import { SyntaxService } from 'src/app/services/syntax.service';

enum EventTypeAssetPortfolio {
  Compra = 0,
  Venda = 1
}

interface EventTypeOption {
  label: string;
  value: number;
}

@Component({
  selector: 'app-portfolio-transaction-new',
  templateUrl: './portfolio-transaction-new.component.html',
  styleUrls: ['./portfolio-transaction-new.component.css']
})
export class PortfolioTransactionNewComponent implements OnInit {

  eventTypeMap = {
    [EventTypeAssetPortfolio.Compra]: 0,
    [EventTypeAssetPortfolio.Venda]: 1
  };

  eventTypeOptions: EventTypeOption[] = [
    { label: 'Compra', value: this.eventTypeMap[EventTypeAssetPortfolio.Compra] },
    { label: 'Venda', value: this.eventTypeMap[EventTypeAssetPortfolio.Venda] }
  ];  

  assetPortfolioForm!: FormGroup;
  assetList: Asset[] = []; // Array para armazenar os ativos vindos da API
  portfolioList: Portfolio[] = []; // Array para armazenar as carteiras vindas da API

  
  constructor(private formBuilder: FormBuilder, private syntaxService: SyntaxService, private router: Router) {}
  
  ngOnInit(): void {
    this.assetPortfolioForm = this.formBuilder.group({
      idAsset: [''],
      quantity: 0,
      purchasePrice: 0,
      type: 0,
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

    // obter informações sobre o portfólio
    const selectedPortfolio = this.portfolioList.find(p => p.id === assetPortfolio.idPortfolio);

    // obter informações sobre o ativo
    const selectedAsset = this.assetList.find(a => a.id === assetPortfolio.idAsset);

    // preencher as propriedades Navigation do objeto AssetPortfolio
    assetPortfolio.portfolioNavigation = selectedPortfolio!;
    assetPortfolio.assetNavigation = selectedAsset!;

    this.syntaxService.postAssetPortfolio(assetPortfolio)
      .subscribe(
        () => {
          this.router.navigate(['/portfolio/transaction']);
        },
        (error: any) => {
          console.error('Erro ao criar transação de ativo:', error);
        }
      );
  }

  

  voltar() : void {
    this.router.navigate(['/portfolio/transaction']);
  }

}
