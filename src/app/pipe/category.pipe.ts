import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any[], cat: any): any[] {
    return value.filter( product => product.catid === cat )
  }

}
