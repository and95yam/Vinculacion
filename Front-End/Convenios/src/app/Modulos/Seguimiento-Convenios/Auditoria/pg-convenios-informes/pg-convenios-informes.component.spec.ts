import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgConveniosInformesComponent } from './pg-convenios-informes.component';

describe('PgConveniosInformesComponent', () => {
  let component: PgConveniosInformesComponent;
  let fixture: ComponentFixture<PgConveniosInformesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgConveniosInformesComponent]
    });
    fixture = TestBed.createComponent(PgConveniosInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
