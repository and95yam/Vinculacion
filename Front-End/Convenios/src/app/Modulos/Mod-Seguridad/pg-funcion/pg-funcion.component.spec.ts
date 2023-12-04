import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgFuncionComponent } from './pg-funcion.component';

describe('PgFuncionComponent', () => {
  let component: PgFuncionComponent;
  let fixture: ComponentFixture<PgFuncionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgFuncionComponent]
    });
    fixture = TestBed.createComponent(PgFuncionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
