import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleBeneficioComponent } from './detalle-beneficio/detalle-beneficio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'beneficio/:id', 
    component: DetalleBeneficioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
