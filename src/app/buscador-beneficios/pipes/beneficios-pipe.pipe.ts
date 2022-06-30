import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beneficiosPipe'
})
export class BeneficiosPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
