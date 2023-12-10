import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgInformesComponent } from './pg-informes.component';

describe('PgInformesComponent', () => {
  let component: PgInformesComponent;
  let fixture: ComponentFixture<PgInformesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgInformesComponent]
    });
    fixture = TestBed.createComponent(PgInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
