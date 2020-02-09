import { TestBed } from '@angular/core/testing';

import { DataRestauranteService } from './data-restaurante.service';

describe('DataRestauranteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataRestauranteService = TestBed.get(DataRestauranteService);
    expect(service).toBeTruthy();
  });
});
