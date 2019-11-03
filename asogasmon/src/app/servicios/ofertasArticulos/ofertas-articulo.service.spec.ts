import { TestBed } from '@angular/core/testing';

import { OfertasArticuloService } from './ofertas-articulo.service';

describe('OfertasArticuloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertasArticuloService = TestBed.get(OfertasArticuloService);
    expect(service).toBeTruthy();
  });
});
