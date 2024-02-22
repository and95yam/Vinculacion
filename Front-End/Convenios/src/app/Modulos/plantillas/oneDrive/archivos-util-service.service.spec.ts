import { TestBed } from '@angular/core/testing';

import { ArchivosUtilServiceService } from './archivos-util-service.service';

describe('ArchivosUtilServiceService', () => {
  let service: ArchivosUtilServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivosUtilServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
