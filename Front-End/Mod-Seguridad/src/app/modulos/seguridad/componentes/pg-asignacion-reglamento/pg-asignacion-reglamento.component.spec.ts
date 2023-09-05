import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgAsignacionReglamentoComponent } from './pg-asignacion-reglamento.component';

describe('PgAsignacionReglamentoComponent', () => {
  let component: PgAsignacionReglamentoComponent;
  let fixture: ComponentFixture<PgAsignacionReglamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgAsignacionReglamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgAsignacionReglamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
