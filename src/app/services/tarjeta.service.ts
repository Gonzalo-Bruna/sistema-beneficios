import { Injectable } from '@angular/core';
import { tarjetas } from '../interfaces/tarjeta';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor() { }

  getTarjetas() {
    return tarjetas;
  }
}
