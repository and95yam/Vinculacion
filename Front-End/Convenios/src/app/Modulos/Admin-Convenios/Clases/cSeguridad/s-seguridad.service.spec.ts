import { TestBed } from '@angular/core/testing';

import { SSeguridadService } from './s-seguridad.service';

describe('SSeguridadService', () => {
  let service: SSeguridadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSeguridadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
