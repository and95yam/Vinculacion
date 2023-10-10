import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgFooterComponent } from './pg-footer.component';

describe('PgFooterComponent', () => {
  let component: PgFooterComponent;
  let fixture: ComponentFixture<PgFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgFooterComponent]
    });
    fixture = TestBed.createComponent(PgFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
