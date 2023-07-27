import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgOpcionesComponent } from './pg-opciones.component';

describe('PgOpcionesComponent', () => {
  let component: PgOpcionesComponent;
  let fixture: ComponentFixture<PgOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgOpcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
