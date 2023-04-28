import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Asset } from 'src/app/models/asset';
import { AssetPortfolio } from 'src/app/models/asset-portfolio';
import { Portfolio } from 'src/app/models/portfolio';
import { AuthService } from 'src/app/services/auth.service';
import { SyntaxService } from 'src/app/services/syntax.service';

enum EventTypeAssetPortfolio {
  Buy = 0,
  Sell = 1
}

interface EventTypeOption {
  label: string;
  value: number;
}

@Component({
  selector: 'app-portfolio-transaction-edit',
  templateUrl: './portfolio-transaction-edit.component.html',
  styleUrls: ['./portfolio-transaction-edit.component.css']
})
export class PortfolioTransactionEditComponent implements OnInit {

  eventTypeMap = {
    [EventTypeAssetPortfolio.Buy]: 0,
    [EventTypeAssetPortfolio.Sell]: 1
  };

  eventTypeOptions: EventTypeOption[] = [
    { label: 'Buy', value: this.eventTypeMap[EventTypeAssetPortfolio.Buy] },
    { label: 'Sell', value: this.eventTypeMap[EventTypeAssetPortfolio.Sell] }
  ];  

  assetPortfolioForm!: FormGroup;
  id!: string;
  assetPortfolio!: AssetPortfolio;
  assetList: Asset[] = []; // Array para armazenar os ativos vindos da API
  portfolioList: Portfolio[] = []; // Array para armazenar as carteiras vindas da API

  constructor(
    private formBuilder: FormBuilder,
    private syntaxService: SyntaxService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private datepipe: DatePipe,
  ) {
    this.assetPortfolioForm = this.formBuilder.group({
      idAsset: [null, Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
      purchasePrice: [0, [Validators.required, Validators.min(0)]],
      type: [null, Validators.required],
      date: ['', Validators.required],
      idPortfolio: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;

    // Chame os métodos para obter a lista de ativos e carteiras da API
    this.syntaxService.getAssetList().subscribe(
      (assets: Asset[]) => {
        this.assetList = assets;
      },
      (error: any) => {
        console.error('Error while getting the Asset list::', error);
      }
    );

    this.syntaxService.getPortfolioList().subscribe(
      (portfolios: Portfolio[]) => {
        this.portfolioList = portfolios;
      },
      (error: any) => {
        console.error('Error while getting the Portfolio list:', error);
      }
    );  

    this.syntaxService.getAssetPortfolio(parseInt(this.id)).subscribe((res) => {
      this.assetPortfolio = res;
      this.assetPortfolioForm = this.formBuilder.group({
        idAsset: this.assetPortfolio.idAsset,
        quantity: this.assetPortfolio.quantity,
        purchasePrice: this.assetPortfolio.purchasePrice,
        type: this.assetPortfolio.type,
        date: this.datepipe.transform(this.assetPortfolio.date, 'yyyy-MM-dd'),
        idPortfolio: this.assetPortfolio.id

      })
    });
  }
  
  back() : void {
    this.router.navigate(['/portfolio/transaction']);
  }

  onSubmit() {
    const assetPortfolio = new AssetPortfolio;
    assetPortfolio.id = parseInt(this.id);
    assetPortfolio.idAsset = this.assetPortfolioForm.controls['idAsset'].value;
    assetPortfolio.quantity = this.assetPortfolioForm.controls['quantity'].value;
    assetPortfolio.purchasePrice = this.assetPortfolioForm.controls['purchasePrice'].value;
    assetPortfolio.type = parseInt(this.assetPortfolioForm.controls['type'].value, 10);
    assetPortfolio.date = this.assetPortfolioForm.controls['date'].value;
    assetPortfolio.idPortfolio = this.assetPortfolioForm.controls['idPortfolio'].value;

    // obter informações sobre o portfólio
    const selectedPortfolio = this.portfolioList.find(p => p.id === assetPortfolio.idPortfolio);

    // obter informações sobre o ativo
    const selectedAsset = this.assetList.find(a => a.id === assetPortfolio.idAsset);

    // preencher as propriedades Navigation do objeto AssetPortfolio
    assetPortfolio.portfolioNavigation = selectedPortfolio!;
    assetPortfolio.assetNavigation = selectedAsset!;

    this.syntaxService.putAssetPortfolio(assetPortfolio)
      .subscribe(
        () => {
          this.router.navigate(['/portfolio/transaction']);
        },
        (error: any) => {
          console.error('Error while creating the Asset:', error);
        }
      );
  }  
}
