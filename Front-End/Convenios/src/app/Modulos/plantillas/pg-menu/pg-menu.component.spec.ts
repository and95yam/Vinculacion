import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgMenuComponent } from './pg-menu.component';

describe('PgMenuComponent', () => {
  let component: PgMenuComponent;
  let fixture: ComponentFixture<PgMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgMenuComponent]
    });
    fixture = TestBed.createComponent(PgMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
