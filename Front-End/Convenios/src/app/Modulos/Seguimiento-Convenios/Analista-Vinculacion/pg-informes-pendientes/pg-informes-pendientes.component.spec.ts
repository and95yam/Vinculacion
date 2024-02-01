import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgInformesPendientesComponent } from './pg-informes-pendientes.component';

describe('PgInformesPendientesComponent', () => {
  let component: PgInformesPendientesComponent;
  let fixture: ComponentFixture<PgInformesPendientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgInformesPendientesComponent]
    });
    fixture = TestBed.createComponent(PgInformesPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
