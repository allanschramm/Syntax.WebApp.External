import { Pipe, PipeTransform } from '@angular/core';

enum EventTypeAssetPortfolio {
  Buy = 0,
  Sell = 1
}

@Pipe({
  name: 'portfolioEventType'
})
export class PortfolioEventTypePipe implements PipeTransform {

  transform(value: number): string {
    return EventTypeAssetPortfolio[value];
  }

}
