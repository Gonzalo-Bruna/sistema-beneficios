import { Component, OnInit } from '@angular/core';
import { BeneficioService } from '../services/beneficio.service';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss']
})
export class BeneficiosComponent implements OnInit {

  constructor(private beneficiosService: BeneficioService) { }

  ngOnInit(): void {
  }

  getBeneficios() {
    return this.beneficiosService.getBeneficios();
  }

}
