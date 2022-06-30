import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleBeneficioComponent } from './detalle-beneficio.component';

describe('DetalleBeneficioComponent', () => {
  let component: DetalleBeneficioComponent;
  let fixture: ComponentFixture<DetalleBeneficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleBeneficioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
