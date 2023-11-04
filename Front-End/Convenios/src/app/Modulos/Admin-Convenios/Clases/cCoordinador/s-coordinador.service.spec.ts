import { TestBed } from '@angular/core/testing';

import { SCoordinadorService } from './s-coordinador.service';

describe('SCoordinadorService', () => {
  let service: SCoordinadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCoordinadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
