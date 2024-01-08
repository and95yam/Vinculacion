import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgListaInformesConvenioComponent } from './pg-lista-informes-convenio.component';

describe('PgListaInformesConvenioComponent', () => {
  let component: PgListaInformesConvenioComponent;
  let fixture: ComponentFixture<PgListaInformesConvenioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgListaInformesConvenioComponent]
    });
    fixture = TestBed.createComponent(PgListaInformesConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
