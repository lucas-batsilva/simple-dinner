import { TestBed } from '@angular/core/testing';

import { ApiPratoService } from './api-prato.service';

describe('ApiPratoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPratoService = TestBed.get(ApiPratoService);
    expect(service).toBeTruthy();
  });
});
