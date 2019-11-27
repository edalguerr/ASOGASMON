import { TestBed } from '@angular/core/testing';

import { OfertasPensionService } from './ofertas-pension.service';

describe('OfertasPensionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertasPensionService = TestBed.get(OfertasPensionService);
    expect(service).toBeTruthy();
  });
});
