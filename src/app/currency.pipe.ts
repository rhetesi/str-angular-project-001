import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  currencies: string[] = ['Ft', 'USD', 'EUR'];

  transform(value: any, curr: string = this.currencies[0]): any {
    if (curr === this.currencies[0]) {
      return `${value} ${curr}`;
    } else if ((curr === this.currencies[1])) {
      return `${curr} ${Math.round(value/295.87*100)/100}`
    }
    return `${curr} ${Math.round(value/358.51*100)/100}`;
  }

}
