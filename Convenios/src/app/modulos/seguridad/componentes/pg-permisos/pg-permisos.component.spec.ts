import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgPermisosComponent } from './pg-permisos.component';

describe('PgPermisosComponent', () => {
  let component: PgPermisosComponent;
  let fixture: ComponentFixture<PgPermisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgPermisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
