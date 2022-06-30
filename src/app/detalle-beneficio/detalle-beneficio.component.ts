import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeneficioService } from '../services/beneficio.service';

@Component({
  selector: 'app-detalle-beneficio',
  templateUrl: './detalle-beneficio.component.html',
  styleUrls: ['./detalle-beneficio.component.scss']
})
export class DetalleBeneficioComponent implements OnInit {

  public beneficio:any;

  constructor(private route: ActivatedRoute, private beneficiosService: BeneficioService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( (id:any) => {
      const {params} = id;
      id = params.id;
      this.beneficio = this.cargarBeneficio(id);
    } );

  }

  cargarBeneficio(id:number){
    return this.beneficiosService.getBeneficio(id)
  }

}
