import { TestBed } from '@angular/core/testing';

import { SEvaluacionService } from './s-evaluacion.service';

describe('SEvaluacionService', () => {
  let service: SEvaluacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SEvaluacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
