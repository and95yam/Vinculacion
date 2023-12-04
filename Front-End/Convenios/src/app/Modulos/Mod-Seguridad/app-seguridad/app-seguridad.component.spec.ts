import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSeguridadComponent } from './app-seguridad.component';

describe('AppSeguridadComponent', () => {
  let component: AppSeguridadComponent;
  let fixture: ComponentFixture<AppSeguridadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSeguridadComponent]
    });
    fixture = TestBed.createComponent(AppSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
