import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-transaction',
  templateUrl: './portfolio-transaction.component.html',
  styleUrls: ['./portfolio-transaction.component.css']
})
export class PortfolioTransactionComponent {

  constructor(private router: Router) { }

  newTransaction() {
    this.router.navigate(['/portfolio/new']);
  }


}
