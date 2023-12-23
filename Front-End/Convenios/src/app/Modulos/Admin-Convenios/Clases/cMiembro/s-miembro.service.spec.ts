import { TestBed } from '@angular/core/testing';

import { SMiembroService } from './s-miembro.service';

describe('SMiembroService', () => {
  let service: SMiembroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SMiembroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
