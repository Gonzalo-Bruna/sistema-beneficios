import { Pipe, PipeTransform } from '@angular/core';
import { Beneficio } from 'src/app/interfaces/beneficio';
import { BeneficiosFilter } from '../interfaces/beneficios-filter';

@Pipe({
  name: 'beneficiosPipe',
  pure: false,
})
export class BeneficiosPipePipe implements PipeTransform {

  transform(value: Beneficio[], arg:BeneficiosFilter): any {
    let list:Array<Beneficio> = [];

    if(arg.input === "") {
      return null;
    }

    switch(arg.filter) {
      case "0": {
        for(let beneficio of value) {
          if(beneficio.nombre.toLowerCase().indexOf(arg.input.toLowerCase()) > -1) {
            list.push(beneficio);
          }
        }
        break;
      }
      case "1": {
        for(let beneficio of value) {
          if(beneficio.rubro.toLowerCase().indexOf(arg.input.toLowerCase()) > -1) {
            list.push(beneficio);
          }
        }
        break;
      }
      case "2": {
        for(let beneficio of value) {
          if(beneficio.banco.toLowerCase().indexOf(arg.input.toLowerCase()) > -1) {
            list.push(beneficio);
          }
        }
        break;
      }
      case "3": {
        for(let beneficio of value) {
          if(beneficio.tarjeta.toLowerCase().indexOf(arg.input.toLowerCase()) > -1) {
            list.push(beneficio);
          }
        }
        break;
      }
      case "4": {
        for(let beneficio of value) {
          if(beneficio.ubicacion.toLowerCase().indexOf(arg.input.toLowerCase()) > -1) {
            list.push(beneficio);
          }
        }
        break;
      }
    }

    return list;
  }
  
}
