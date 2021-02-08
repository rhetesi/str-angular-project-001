import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(value: any[], key: string = '', phrase: string | number | boolean): any[] {

    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }

    phrase = typeof phrase === 'number' ? phrase : ('' + phrase).toLowerCase();
    return value.filter(item => {
      if (typeof item[key] === 'number' && typeof phrase === 'number') {
        return item[key] = phrase;
      }

      const strItem: string = ('' + item[key]).toLocaleLowerCase();
      // console.log('value', value);
      // console.log('item', item);
      // console.log('key', key);
      // console.log('item[key]', item[key]);
      // console.log('strItem', strItem);
      // console.log('phrase', phrase);
      return strItem.includes((phrase as string));
    })

  }

}
