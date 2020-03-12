import { TestBed } from '@angular/core/testing';

import { OfertaDetalladaActualService } from './oferta-detallada-actual.service';

describe('OfertaDetalladaActualService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertaDetalladaActualService = TestBed.get(OfertaDetalladaActualService);
    expect(service).toBeTruthy();
  });
});
