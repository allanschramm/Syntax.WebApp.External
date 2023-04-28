import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetPortfolio } from 'src/app/models/asset-portfolio';
import { SyntaxService } from 'src/app/services/syntax.service';

@Component({
  selector: 'app-portfolio-transaction-delete',
  templateUrl: './portfolio-transaction-delete.component.html',
  styleUrls: ['./portfolio-transaction-delete.component.css']
})
export class PortfolioTransactionDeleteComponent implements OnInit {

  constructor(
    private syntaxService: SyntaxService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

    id!: string;
    assetPortfolio!: AssetPortfolio;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.syntaxService.getAssetPortfolio(parseInt(this.id)).subscribe(res => this.assetPortfolio = res);
  }

  back() : void {
    this.router.navigate(['/portfolio/transaction']);
  }

  remove() : void {
    this.syntaxService.deleteAssetPortfolio(parseInt(this.id))
    .subscribe(
      (res) => {
        this.syntaxService.mostrarMensagem('Sucessfully removed.');
        this.back();
    },
    (error: any) => {
      console.error('Error while creating the Transaction:', error);
    }    );
  }
}
