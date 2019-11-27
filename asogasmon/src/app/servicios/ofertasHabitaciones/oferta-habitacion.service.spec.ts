import { TestBed } from '@angular/core/testing';

import { OfertaHabitacionService } from './oferta-habitacion.service';

describe('OfertaHabitacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertaHabitacionService = TestBed.get(OfertaHabitacionService);
    expect(service).toBeTruthy();
  });
});
