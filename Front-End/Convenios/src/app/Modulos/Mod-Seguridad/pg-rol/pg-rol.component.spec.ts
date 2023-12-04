import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgRolComponent } from './pg-rol.component';

describe('PgRolComponent', () => {
  let component: PgRolComponent;
  let fixture: ComponentFixture<PgRolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgRolComponent]
    });
    fixture = TestBed.createComponent(PgRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
