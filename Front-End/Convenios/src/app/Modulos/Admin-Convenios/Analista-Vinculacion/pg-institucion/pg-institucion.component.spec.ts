import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgInstitucionComponent } from './pg-institucion.component';

describe('PgInstitucionComponent', () => {
  let component: PgInstitucionComponent;
  let fixture: ComponentFixture<PgInstitucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgInstitucionComponent]
    });
    fixture = TestBed.createComponent(PgInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
