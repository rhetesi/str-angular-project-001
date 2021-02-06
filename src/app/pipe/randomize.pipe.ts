import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomize'
})
export class RandomizePipe implements PipeTransform {

  transform(value: any[]): any[] {
    return value.sort( () => 0.5 - Math.random());
  }

}
