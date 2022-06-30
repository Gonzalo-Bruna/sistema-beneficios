import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoverComponent } from './cover/cover.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { FooterComponent } from './footer/footer.component';
import { DetalleBeneficioComponent } from './detalle-beneficio/detalle-beneficio.component';
import { HomeComponent } from './home/home.component';
import { BuscadorBeneficiosComponent } from './buscador-beneficios/buscador-beneficios.component';
import { SearchBarComponent } from './buscador-beneficios/components/search-bar/search-bar.component';
import { BeneficiosPipePipe } from './buscador-beneficios/pipes/beneficios-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    BeneficiosComponent,
    FooterComponent,
    DetalleBeneficioComponent,
    HomeComponent,
    BuscadorBeneficiosComponent,
    SearchBarComponent,
    BeneficiosPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
