import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgLoginCasComponent } from './pg-login-cas.component';

describe('PgLoginCasComponent', () => {
  let component: PgLoginCasComponent;
  let fixture: ComponentFixture<PgLoginCasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgLoginCasComponent]
    });
    fixture = TestBed.createComponent(PgLoginCasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
