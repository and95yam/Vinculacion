import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgPerfilComponent } from './pg-perfil.component';

describe('PgPerfilComponent', () => {
  let component: PgPerfilComponent;
  let fixture: ComponentFixture<PgPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgPerfilComponent]
    });
    fixture = TestBed.createComponent(PgPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
