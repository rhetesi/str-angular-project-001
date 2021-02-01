import { Input, Output, Pipe, PipeTransform } from '@angular/core';
import { CurrencyComponent } from './currency/currency.component';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  currencies: string[] = ['Ft', 'USD', 'EUR'];

  @Input() curr: string = 'Ft'


  // curr: string = this.receiveCurrency();

  transform(value: any, curr: string = this.curr): any {
    if (curr === this.currencies[0]) {
      return `${value} ${this.curr}`;
    } else if ((curr === this.currencies[1])) {
      console.log('transform:', this.curr);
      return `${this.curr} ${Math.round(value/295.87*100)/100}`
    }
    return `${this.curr} ${Math.round(value/358.51*100)/100}`;
  }

  @Output() receiveCurrency($event) {
    console.log('click:', this.curr);
    this.curr = $event;
    return this.curr;
  }
  
  constructor() {
    console.log(this.curr);
  }

  
}
