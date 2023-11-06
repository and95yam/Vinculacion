import { TestBed } from '@angular/core/testing';

import { SInstitucionService } from './s-institucion.service';

describe('SInstitucionService', () => {
  let service: SInstitucionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SInstitucionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
