import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgAccionComponent } from './pg-accion.component';

describe('PgAccionComponent', () => {
  let component: PgAccionComponent;
  let fixture: ComponentFixture<PgAccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgAccionComponent]
    });
    fixture = TestBed.createComponent(PgAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
