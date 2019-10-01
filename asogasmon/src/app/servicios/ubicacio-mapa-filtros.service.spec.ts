import { TestBed } from '@angular/core/testing';

import { UbicacioMapaFiltrosService } from './ubicacio-mapa-filtros.service';

describe('UbicacioMapaFiltrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UbicacioMapaFiltrosService = TestBed.get(UbicacioMapaFiltrosService);
    expect(service).toBeTruthy();
  });
});
