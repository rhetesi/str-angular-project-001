import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sale'
})
export class SalePipe implements PipeTransform {

  transform(value: any[]): any[] {
    if (!Array.isArray(value)) {
      return value;
    }
    return value.filter( product => product.active )
  }

}
