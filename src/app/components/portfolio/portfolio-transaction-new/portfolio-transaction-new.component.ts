import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetPortfolio } from 'src/app/models/asset-portfolio';
import { SyntaxService } from 'src/app/services/syntax.service';


@Component({
  selector: 'app-portfolio-transaction-new',
  templateUrl: './portfolio-transaction-new.component.html',
  styleUrls: ['./portfolio-transaction-new.component.css']
})
export class PortfolioTransactionNewComponent implements OnInit {
  
  assetPortfolioForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private syntaxService: SyntaxService, private router: Router) {
    this.assetPortfolioForm = this.formBuilder.group({
      quantity: ['', Validators.required],
      purchasePrice: ['', Validators.required],
      date: ['', Validators.required],
      type: ['', Validators.required],
      idPortfolio: ['', Validators.required],
      idAsset: ['', Validators.required]
    });
   }
  
  ngOnInit() {
    
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
