import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgGrupoComponent } from './pg-grupo.component';

describe('PgGrupoComponent', () => {
  let component: PgGrupoComponent;
  let fixture: ComponentFixture<PgGrupoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgGrupoComponent]
    });
    fixture = TestBed.createComponent(PgGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
