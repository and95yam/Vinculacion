import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgDependenciaComponent } from './pg-dependencia.component';

describe('PgDependenciaComponent', () => {
  let component: PgDependenciaComponent;
  let fixture: ComponentFixture<PgDependenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgDependenciaComponent]
    });
    fixture = TestBed.createComponent(PgDependenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
