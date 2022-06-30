import { Injectable } from '@angular/core';
import { beneficios } from '../interfaces/beneficio';

@Injectable({
  providedIn: 'root'
})
export class BeneficioService {

  constructor() { }

  getBeneficios() {
    return beneficios; 
  }
  getBeneficio(id:number){
    return beneficios.find( beneficio=> {
      return beneficio.id_beneficio == id;
    })
  }
}
