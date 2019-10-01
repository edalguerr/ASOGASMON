import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideOfertaDetalladaComponent } from './slide-oferta-detallada.component';

describe('SlideOfertaDetalladaComponent', () => {
  let component: SlideOfertaDetalladaComponent;
  let fixture: ComponentFixture<SlideOfertaDetalladaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideOfertaDetalladaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideOfertaDetalladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
