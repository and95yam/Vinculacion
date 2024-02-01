import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgInformesEntregadosMesComponent } from './pg-informes-entregados-mes.component';

describe('PgInformesEntregadosMesComponent', () => {
  let component: PgInformesEntregadosMesComponent;
  let fixture: ComponentFixture<PgInformesEntregadosMesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgInformesEntregadosMesComponent]
    });
    fixture = TestBed.createComponent(PgInformesEntregadosMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
