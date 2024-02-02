import { TestBed } from '@angular/core/testing';

import { SPerfilService } from './s-perfil.service';

describe('SPerfilService', () => {
  let service: SPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
