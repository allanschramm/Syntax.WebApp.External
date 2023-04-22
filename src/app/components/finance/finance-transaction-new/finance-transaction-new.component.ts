import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';
import { TransactionClass } from 'src/app/models/transaction-class';
import { SyntaxService } from 'src/app/services/syntax.service';

@Component({
  selector: 'app-finance-transaction-new',
  templateUrl: './finance-transaction-new.component.html',
  styleUrls: ['./finance-transaction-new.component.css']
})
export class FinanceTransactionNewComponent implements OnInit {

  transactionForm!: FormGroup
  transactionClassList: TransactionClass[] = [];

  constructor(private formBuilder: FormBuilder, private syntaxService: SyntaxService, private router: Router) { }
  
  ngOnInit(): void {
    this.transactionForm = this.formBuilder.group({
      value: [''],
      description: [''],
      date: [''],
      type: [''],
      idClass: ['']
    });

    this.syntaxService.getTransactionClassList().subscribe(
      (classes: TransactionClass[]) => {
        this.transactionClassList = classes;
      },
      (error: any) => {
        console.error('Erro ao obter a lista de classes:', error);
      }
    );
  }

  onSubmit() {
    const transaction = this.transactionForm.value as Transaction;
    this.syntaxService.postTransaction(transaction)
    .subscribe(
      () => {
        this.router.navigate(['finances/transaction']);
      }
    )
  }

  voltar() : void {
    this.router.navigate(['/finances/transaction'])
  }
  
}
