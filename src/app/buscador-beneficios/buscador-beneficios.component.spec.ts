import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorBeneficiosComponent } from './buscador-beneficios.component';

describe('BuscadorBeneficiosComponent', () => {
  let component: BuscadorBeneficiosComponent;
  let fixture: ComponentFixture<BuscadorBeneficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorBeneficiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
