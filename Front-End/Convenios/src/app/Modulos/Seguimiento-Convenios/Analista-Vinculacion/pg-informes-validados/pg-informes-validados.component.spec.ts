import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgInformesValidadosComponent } from './pg-informes-validados.component';

describe('PgInformesValidadosComponent', () => {
  let component: PgInformesValidadosComponent;
  let fixture: ComponentFixture<PgInformesValidadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgInformesValidadosComponent]
    });
    fixture = TestBed.createComponent(PgInformesValidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
