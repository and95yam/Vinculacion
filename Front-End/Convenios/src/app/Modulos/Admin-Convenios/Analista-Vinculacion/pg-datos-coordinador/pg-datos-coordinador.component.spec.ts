import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgDatosCoordinadorComponent } from './pg-datos-coordinador.component';

describe('PgDatosCoordinadorComponent', () => {
  let component: PgDatosCoordinadorComponent;
  let fixture: ComponentFixture<PgDatosCoordinadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgDatosCoordinadorComponent]
    });
    fixture = TestBed.createComponent(PgDatosCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
