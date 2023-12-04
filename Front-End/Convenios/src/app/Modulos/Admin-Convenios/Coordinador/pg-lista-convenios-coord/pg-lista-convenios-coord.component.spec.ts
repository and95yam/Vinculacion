import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgListaConveniosCoordComponent } from './pg-lista-convenios-coord.component';

describe('PgListaConveniosCoordComponent', () => {
  let component: PgListaConveniosCoordComponent;
  let fixture: ComponentFixture<PgListaConveniosCoordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgListaConveniosCoordComponent]
    });
    fixture = TestBed.createComponent(PgListaConveniosCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
