import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgBienvenidaComponent } from './pg-bienvenida.component';

describe('PgBienvenidaComponent', () => {
  let component: PgBienvenidaComponent;
  let fixture: ComponentFixture<PgBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgBienvenidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
