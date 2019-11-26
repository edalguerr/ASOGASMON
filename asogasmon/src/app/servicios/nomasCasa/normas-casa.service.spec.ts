import { TestBed } from '@angular/core/testing';

import { NormasCasaService } from './normas-casa.service';

describe('NormasCasaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NormasCasaService = TestBed.get(NormasCasaService);
    expect(service).toBeTruthy();
  });
});
