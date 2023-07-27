import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgNoAutorizadoComponent } from './pg-no-autorizado.component';

describe('PgNoAutorizadoComponent', () => {
  let component: PgNoAutorizadoComponent;
  let fixture: ComponentFixture<PgNoAutorizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgNoAutorizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgNoAutorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
