import { TestBed } from '@angular/core/testing';

import { SInformeService } from './s-informe.service';

describe('SInformeService', () => {
  let service: SInformeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SInformeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
