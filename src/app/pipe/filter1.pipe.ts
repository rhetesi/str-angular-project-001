import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(value: any[], phrase: string, key: string = ''): any[] {

    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }

    phrase = ('' + phrase).toLocaleLowerCase();
    return value.filter(item => {
      const strItem: string = ('' + item[key]).toLocaleLowerCase();
      console.log(strItem);
      return strItem.includes(phrase);
    })

  }

}
