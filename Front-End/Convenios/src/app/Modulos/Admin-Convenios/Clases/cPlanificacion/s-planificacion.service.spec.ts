import { TestBed } from '@angular/core/testing';

import { SPlanificacionService } from './s-planificacion.service';

describe('SPlanificacionService', () => {
  let service: SPlanificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPlanificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
