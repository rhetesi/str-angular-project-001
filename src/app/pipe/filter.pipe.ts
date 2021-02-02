import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /**
 * A kapott tömb szűrése a szűrőkifejezés alapján.
 * @param value {any[]} - a szűrendő tömb.
 * @param phrase {string} - a szűrőkifejezés.
 * @param key {string} - az objektum kulcs, ami alapján szűr.
 * @returns {any[]} - a kifejezés alapján szűrt tömb.
 */
  transform(value: any[], phrase: string, key: string = ''): any[] {

    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }

    phrase = ('' + phrase).toLocaleLowerCase();
    return value.filter(item => {
      const strItem: string = ('' + item[key]).toLocaleLowerCase();
      return strItem.includes(phrase);
    })

  }

}
