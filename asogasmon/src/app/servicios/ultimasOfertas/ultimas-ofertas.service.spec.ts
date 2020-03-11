import { TestBed } from '@angular/core/testing';

import { UltimasOfertasService } from './ultimas-ofertas.service';

describe('UltimasOfertasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UltimasOfertasService = TestBed.get(UltimasOfertasService);
    expect(service).toBeTruthy();
  });
});
