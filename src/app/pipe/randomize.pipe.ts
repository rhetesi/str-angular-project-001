import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomize'
})
export class RandomizePipe implements PipeTransform {

  transform(value: any[]): any[] {
    if (!Array.isArray(value)) {
      return value;
    }
    return value.sort( () => 0.5 - Math.random());
  }

}
