import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): 'Vuela' | 'No Vuela' {
    return value ? 'Vuela' : 'No Vuela';

    /* Solucion con un IF/ELSE de toda la vida
    if (value === true){
      return 'Puede volar';
    }

    return 'No puede volar';*/
  }

}
