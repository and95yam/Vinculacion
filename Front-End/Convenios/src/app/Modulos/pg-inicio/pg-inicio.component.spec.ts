import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgInicioComponent } from './pg-inicio.component';

describe('PgInicioComponent', () => {
  let component: PgInicioComponent;
  let fixture: ComponentFixture<PgInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgInicioComponent]
    });
    fixture = TestBed.createComponent(PgInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
