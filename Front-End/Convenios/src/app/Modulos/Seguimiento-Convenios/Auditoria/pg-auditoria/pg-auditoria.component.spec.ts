import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgAuditoriaComponent } from './pg-auditoria.component';

describe('PgAuditoriaComponent', () => {
  let component: PgAuditoriaComponent;
  let fixture: ComponentFixture<PgAuditoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgAuditoriaComponent]
    });
    fixture = TestBed.createComponent(PgAuditoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
