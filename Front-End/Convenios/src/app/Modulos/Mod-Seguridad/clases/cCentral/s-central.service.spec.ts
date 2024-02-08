import { TestBed } from '@angular/core/testing';

import { SCentralService } from './s-central.service';

describe('SCentralService', () => {
  let service: SCentralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCentralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
