import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgInvitadoComponent } from './pg-invitado.component';

describe('PgInvitadoComponent', () => {
  let component: PgInvitadoComponent;
  let fixture: ComponentFixture<PgInvitadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgInvitadoComponent]
    });
    fixture = TestBed.createComponent(PgInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
