import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/models/transaction';
import { TransactionClass } from 'src/app/models/transaction-class';
import { SyntaxService } from 'src/app/services/syntax.service';

@Component({
  selector: 'app-finance-transaction-list',
  templateUrl: './finance-transaction-list.component.html',
  styleUrls: ['./finance-transaction-list.component.css']
})
export class FinanceTransactionListComponent implements OnInit {
  transactionList$!: Observable<Transaction[]>;
  transactionClassList$!: TransactionClass[];
  p: number = 1;

  constructor(private syntaxService: SyntaxService) { }
  
  ngOnInit(): void {
    this.transactionList$ = this.syntaxService.getTransactionList();
    
    this.syntaxService.getTransactionClassList().subscribe(transactionClassList => {
      this.transactionClassList$ = transactionClassList;
    });
  }
  
  getCategoryName(idClass: number): string {
    const category = this.transactionClassList$.find(c => c.id === idClass);
    return category ? category.name : '';
  }

}