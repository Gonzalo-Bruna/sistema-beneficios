import { Component, OnInit } from '@angular/core';
import { Beneficio } from '../interfaces/beneficio';
import { BeneficioService } from '../services/beneficio.service';
import { BeneficiosFilter } from './interfaces/beneficios-filter';

@Component({  
  selector: 'app-buscador-beneficios',
  templateUrl: './buscador-beneficios.component.html',
  styleUrls: ['./buscador-beneficios.component.scss']
})
export class BuscadorBeneficiosComponent implements OnInit {
  beneficiosList:Array<Beneficio> = [];
  beneficiosFilter:BeneficiosFilter = {filter:"", input:""};
  
  constructor(private beneficioService:BeneficioService) { }

  ngOnInit(): void {
    this.getBeneficios();
  }

  getBeneficios() {
    this.beneficiosList = this.beneficioService.getBeneficios();
  }

  getFilter(outputFilter:BeneficiosFilter) {
    this.beneficiosFilter = outputFilter;
  }
}
