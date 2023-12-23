import { TestBed } from '@angular/core/testing';

import { SActividadService } from './s-actividad.service';

describe('SActividadService', () => {
  let service: SActividadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SActividadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
