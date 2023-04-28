import { Pipe, PipeTransform } from '@angular/core';

enum EventTypeTransaction {
  Expense = 0,
  Income = 1
}

@Pipe({
  name: 'financeEventType'
})
export class FinanceEventTypePipe implements PipeTransform {

  transform(value: number): string {
    return EventTypeTransaction[value];
  }
  
}
