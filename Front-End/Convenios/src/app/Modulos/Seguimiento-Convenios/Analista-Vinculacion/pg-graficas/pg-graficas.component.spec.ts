import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgGraficasComponent } from './pg-graficas.component';

describe('PgGraficasComponent', () => {
  let component: PgGraficasComponent;
  let fixture: ComponentFixture<PgGraficasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgGraficasComponent]
    });
    fixture = TestBed.createComponent(PgGraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
