import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgConveniosComponent } from './pg-convenios.component';

describe('PgConveniosComponent', () => {
  let component: PgConveniosComponent;
  let fixture: ComponentFixture<PgConveniosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgConveniosComponent]
    });
    fixture = TestBed.createComponent(PgConveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
