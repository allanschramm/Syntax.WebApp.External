import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';
import { SyntaxService } from 'src/app/services/syntax.service';

@Component({
  selector: 'app-finance-transaction-delete',
  templateUrl: './finance-transaction-delete.component.html',
  styleUrls: ['./finance-transaction-delete.component.css']
})
export class FinanceTransactionDeleteComponent {
  
  constructor(
    private syntaxService: SyntaxService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

    id!: string;
    transaction!: Transaction;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.syntaxService.getTransaction(parseInt(this.id)).subscribe(res => this.transaction = res);
  }

  back() : void {
    this.router.navigate(['/finances/transaction']);
  }

  remove() : void {
    this.syntaxService.deleteTransaction(parseInt(this.id))
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
