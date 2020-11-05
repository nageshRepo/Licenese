import { TestBed } from '@angular/core/testing';

import { AuthnticationService } from './authntication.service';

describe('AuthnticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthnticationService = TestBed.get(AuthnticationService);
    expect(service).toBeTruthy();
  });
});
