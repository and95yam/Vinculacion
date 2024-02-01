import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgSeguimientoConveniosComponent } from './pg-seguimiento-convenios.component';

describe('PgSeguimientoConveniosComponent', () => {
  let component: PgSeguimientoConveniosComponent;
  let fixture: ComponentFixture<PgSeguimientoConveniosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgSeguimientoConveniosComponent]
    });
    fixture = TestBed.createComponent(PgSeguimientoConveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
