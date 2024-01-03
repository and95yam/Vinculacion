import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgInformesConvenioComponent } from './pg-informes-convenio.component';

describe('PgInformesConvenioComponent', () => {
  let component: PgInformesConvenioComponent;
  let fixture: ComponentFixture<PgInformesConvenioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgInformesConvenioComponent]
    });
    fixture = TestBed.createComponent(PgInformesConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
