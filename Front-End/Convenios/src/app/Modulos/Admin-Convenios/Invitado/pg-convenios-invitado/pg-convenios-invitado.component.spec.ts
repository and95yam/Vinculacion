import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgConveniosInvitadoComponent } from './pg-convenios-invitado.component';

describe('PgConveniosInvitadoComponent', () => {
  let component: PgConveniosInvitadoComponent;
  let fixture: ComponentFixture<PgConveniosInvitadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgConveniosInvitadoComponent]
    });
    fixture = TestBed.createComponent(PgConveniosInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
