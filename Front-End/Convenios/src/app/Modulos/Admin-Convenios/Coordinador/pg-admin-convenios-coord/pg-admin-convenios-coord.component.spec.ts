import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgAdminConveniosCoordComponent } from './pg-admin-convenios-coord.component';

describe('PgAdminConveniosCoordComponent', () => {
  let component: PgAdminConveniosCoordComponent;
  let fixture: ComponentFixture<PgAdminConveniosCoordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgAdminConveniosCoordComponent]
    });
    fixture = TestBed.createComponent(PgAdminConveniosCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
