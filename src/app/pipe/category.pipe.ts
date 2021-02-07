import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any[], cat: any): any[] {

    if (!Array.isArray(value) || !cat) {
      return value;
    }

    return value.filter( product => product.catid === cat )
  }

}
