import { TestBed } from '@angular/core/testing';

import { DataPratoService } from './data-prato.service';

describe('DataPratoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataPratoService = TestBed.get(DataPratoService);
    expect(service).toBeTruthy();
  });
});
