import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgPuenteComponent } from './pg-puente.component';

describe('PgPuenteComponent', () => {
  let component: PgPuenteComponent;
  let fixture: ComponentFixture<PgPuenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgPuenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgPuenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
