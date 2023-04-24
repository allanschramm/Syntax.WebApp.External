import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';
import { TransactionClass } from 'src/app/models/transaction-class';
import { AuthService } from 'src/app/services/auth.service';
import { SyntaxService } from 'src/app/services/syntax.service';

enum EventTypeTransaction {
  Expense = 0,
  Income = 1
}

interface EventTypeOption {
  label: string;
  value: number;
}

@Component({
  selector: 'app-finance-transaction-new',
  templateUrl: './finance-transaction-new.component.html',
  styleUrls: ['./finance-transaction-new.component.css']
})
export class FinanceTransactionNewComponent implements OnInit {

  eventTypeMap = {
    [EventTypeTransaction.Expense]: 0,
    [EventTypeTransaction.Income]: 1
  };

  eventTypeOptions: EventTypeOption[] = [
    { label: 'Expense', value: this.eventTypeMap[EventTypeTransaction.Expense] },
    { label: 'Income', value: this.eventTypeMap[EventTypeTransaction.Income] }
  ];  

  transactionForm!: FormGroup
  transactionClassList: TransactionClass[] = [];

  constructor(
    private formBuilder: FormBuilder, 
    private syntaxService: SyntaxService, 
    private authService: AuthService, 
    private router: Router
    ) { }
  
  ngOnInit(): void {
    this.transactionForm = this.formBuilder.group({
      value: 0,
      description: [''],
      date: [''],
      type: 0,
      idClass: ['']
    });

    this.syntaxService.getTransactionClassList().subscribe(
      (classes: TransactionClass[]) => {
        this.transactionClassList = classes;
      },
      (error: any) => {
        console.error('Error while getting the TransactionClass list:', error);
      }
    );
  }

  onSubmit() {
    const transaction = this.transactionForm.value as Transaction;

    transaction.idUser = this.authService.getUserId();

    const selectedTransactionClass = this.transactionClassList.find(p => p.id === transaction.id);

    transaction.transactionClassNavigation = selectedTransactionClass!;

    this.syntaxService.postTransaction(transaction)
    .subscribe(
      () => {
        this.router.navigate(['finances/transaction']);
      },
      (error: any) => {
        console.error('Error while creating the Transaction:', error);
      }
    );
  }

  voltar() : void {
    this.router.navigate(['/finances/transaction'])
  }
  
}
