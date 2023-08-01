import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgLineaLoginComponent } from './pg-linea-login.component';

describe('PgLineaLoginComponent', () => {
  let component: PgLineaLoginComponent;
  let fixture: ComponentFixture<PgLineaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgLineaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgLineaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
