import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUsuarioComponent } from './ng-usuario.component';

describe('NgUsuarioComponent', () => {
  let component: NgUsuarioComponent;
  let fixture: ComponentFixture<NgUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgUsuarioComponent]
    });
    fixture = TestBed.createComponent(NgUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
