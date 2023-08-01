import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgReglamentoComponent } from './pg-reglamento.component';

describe('PgReglamentoComponent', () => {
  let component: PgReglamentoComponent;
  let fixture: ComponentFixture<PgReglamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgReglamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgReglamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
