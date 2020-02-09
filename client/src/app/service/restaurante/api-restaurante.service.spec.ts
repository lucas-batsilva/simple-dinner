import { TestBed } from '@angular/core/testing';

import { ApiRestauranteService } from './api-restaurante.service';

describe('ApiRestauranteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiRestauranteService = TestBed.get(ApiRestauranteService);
    expect(service).toBeTruthy();
  });
});
