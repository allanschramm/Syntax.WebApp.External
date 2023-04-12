import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance-transaction',
  templateUrl: './finance-transaction.component.html',
  styleUrls: ['./finance-transaction.component.css']
})
export class FinanceTransactionComponent {

  constructor(private router: Router) { }

  newTransaction() {
    this.router.navigate(['/finances/new']);
  }

}
