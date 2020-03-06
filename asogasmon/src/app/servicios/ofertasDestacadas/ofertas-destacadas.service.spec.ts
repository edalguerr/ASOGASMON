import { TestBed } from '@angular/core/testing';

import { OfertasDestacadasService } from './ofertas-destacadas.service';

describe('OfertasDestacadasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertasDestacadasService = TestBed.get(OfertasDestacadasService);
    expect(service).toBeTruthy();
  });
});
