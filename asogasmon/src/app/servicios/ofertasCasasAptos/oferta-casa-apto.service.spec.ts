import { TestBed } from '@angular/core/testing';

import { OfertaCasaAptoService } from './oferta-casa-apto.service';

describe('OfertaCasaAptoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertaCasaAptoService = TestBed.get(OfertaCasaAptoService);
    expect(service).toBeTruthy();
  });
});
