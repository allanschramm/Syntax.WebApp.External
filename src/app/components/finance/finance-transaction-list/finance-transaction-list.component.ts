import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/models/transaction';
import { SyntaxService } from 'src/app/services/syntax.service';

@Component({
  selector: 'app-finance-transaction-list',
  templateUrl: './finance-transaction-list.component.html',
  styleUrls: ['./finance-transaction-list.component.css']
})
export class FinanceTransactionListComponent implements OnInit {
  transactionList$!: Observable<Transaction[]>;
  p: number = 1;

  constructor(private transactionService: SyntaxService) { }
  
  ngOnInit(): void {
    this.transactionList$ = this.transactionService.getTransactionList();
  }
  
}