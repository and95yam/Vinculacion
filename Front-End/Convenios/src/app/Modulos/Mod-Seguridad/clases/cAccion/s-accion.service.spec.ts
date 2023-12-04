import { TestBed } from '@angular/core/testing';

import { SAccionService } from './s-accion.service';

describe('SAccionService', () => {
  let service: SAccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SAccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
