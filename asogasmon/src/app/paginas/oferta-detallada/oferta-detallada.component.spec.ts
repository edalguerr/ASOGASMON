import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaDetalladaComponent } from './oferta-detallada.component';

describe('OfertaDetalladaComponent', () => {
  let component: OfertaDetalladaComponent;
  let fixture: ComponentFixture<OfertaDetalladaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaDetalladaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaDetalladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
