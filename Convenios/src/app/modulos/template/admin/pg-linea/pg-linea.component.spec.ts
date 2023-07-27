import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgLineaComponent } from './pg-linea.component';

describe('PgLineaComponent', () => {
  let component: PgLineaComponent;
  let fixture: ComponentFixture<PgLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgLineaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
