import { TestBed } from '@angular/core/testing';

import { ServiciosEspecificosService } from './servicios-especificos.service';

describe('ServiciosEspecificosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciosEspecificosService = TestBed.get(ServiciosEspecificosService);
    expect(service).toBeTruthy();
  });
});
