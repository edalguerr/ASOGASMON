import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasRecomendadasComponent } from './ofertas-recomendadas.component';

describe('OfertasRecomendadasComponent', () => {
  let component: OfertasRecomendadasComponent;
  let fixture: ComponentFixture<OfertasRecomendadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasRecomendadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasRecomendadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
