import { Injectable } from '@angular/core';
import { bancos } from '../interfaces/banco';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

    constructor() { }

    getBancos() {
        return bancos;
    }
}
