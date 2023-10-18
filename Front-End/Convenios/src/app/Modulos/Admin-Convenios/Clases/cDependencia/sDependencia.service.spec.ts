import { TestBed } from '@angular/core/testing';

import { SDependenciaService } from './sDependencia.service';

describe('SDependenciaService', () => {
  let service: SDependenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SDependenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
