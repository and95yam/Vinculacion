import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgAdminConveniosComponent } from './pg-admin-convenios.component';

describe('PgAdminConveniosComponent', () => {
  let component: PgAdminConveniosComponent;
  let fixture: ComponentFixture<PgAdminConveniosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgAdminConveniosComponent]
    });
    fixture = TestBed.createComponent(PgAdminConveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
