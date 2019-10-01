import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideOfertasDestacadasComponent } from './slide-ofertas-destacadas.component';

describe('SlideOfertasDestacadasComponent', () => {
  let component: SlideOfertasDestacadasComponent;
  let fixture: ComponentFixture<SlideOfertasDestacadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideOfertasDestacadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideOfertasDestacadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
