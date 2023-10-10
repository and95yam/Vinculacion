import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgHeaderComponent } from './pg-header.component';

describe('PgHeaderComponent', () => {
  let component: PgHeaderComponent;
  let fixture: ComponentFixture<PgHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgHeaderComponent]
    });
    fixture = TestBed.createComponent(PgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
