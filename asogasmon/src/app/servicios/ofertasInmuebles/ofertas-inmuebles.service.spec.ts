import { TestBed } from '@angular/core/testing';

import { OfertasInmueblesService } from './ofertas-inmuebles.service';

describe('OfertasInmueblesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertasInmueblesService = TestBed.get(OfertasInmueblesService);
    expect(service).toBeTruthy();
  });
});
