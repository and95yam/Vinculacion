import { TestBed } from '@angular/core/testing';

import { SGrupoService } from './s-grupo.service';

describe('SGrupoService', () => {
  let service: SGrupoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SGrupoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
