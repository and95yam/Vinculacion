import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgListaConveniosInvitadoComponent } from './pg-lista-convenios-invitado.component';

describe('PgListaConveniosInvitadoComponent', () => {
  let component: PgListaConveniosInvitadoComponent;
  let fixture: ComponentFixture<PgListaConveniosInvitadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgListaConveniosInvitadoComponent]
    });
    fixture = TestBed.createComponent(PgListaConveniosInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
