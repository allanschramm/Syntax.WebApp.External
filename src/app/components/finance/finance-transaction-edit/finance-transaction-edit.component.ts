import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';
import { TransactionClass } from 'src/app/models/transaction-class';
import { AuthService } from 'src/app/services/auth.service';
import { SyntaxService } from 'src/app/services/syntax.service';
import { DatePipe } from '@angular/common'

enum EventTypeTransaction {
  Expense = 0,
  Income = 1
}

interface EventTypeOption {
  label: string;
  value: number;
}

@Component({
  selector: 'app-finance-transaction-edit',
  templateUrl: './finance-transaction-edit.component.html',
  styleUrls: ['./finance-transaction-edit.component.css']
})
export class FinanceTransactionEditComponent implements OnInit {

  eventTypeMap = {
    [EventTypeTransaction.Expense]: 0,
    [EventTypeTransaction.Income]: 1
  };

  eventTypeOptions: EventTypeOption[] = [
    { label: 'Expense', value: 0 },
    { label: 'Income', value: 1 }
  ];

  transactionForm!: FormGroup
  id!: string;
  transaction!: Transaction;
  transactionClassList: TransactionClass[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private syntaxService: SyntaxService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private datepipe: DatePipe,
  ) {
    this.transactionForm = this.formBuilder.group({
      value: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      date: ['', Validators.required],
      type: [null, Validators.required],
      idTransactionClass: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;

    this.syntaxService.getTransactionClassList().subscribe(
      (classes: TransactionClass[]) => {
        this.transactionClassList = classes;
      },
      (error: any) => {
        console.error('Error while getting the TransactionClass list:', error);
      }
    );

    this.syntaxService.getTransaction(parseInt(this.id)).subscribe((res) => {
      this.transaction = res;
      this.transactionForm = this.formBuilder.group({
        value: this.transaction.value,
        description: this.transaction.description,
        date: this.datepipe.transform(this.transaction.date, 'yyyy-MM-dd'),
        type: this.transaction.type,
        idTransactionClass: this.transaction.idTransactionClass
      });
    });
  }

  back(): void {
    this.router.navigate(['/finances/transaction']);
  }

  onSubmit(): void {

  }
}
