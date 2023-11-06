import { TestBed } from '@angular/core/testing';

import { SConvenioService } from './s-convenio.service';

describe('SConvenioService', () => {
  let service: SConvenioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SConvenioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
