import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasPensionAptoComponent } from './ofertas-pension-apto.component';

describe('OfertasPensionAptoComponent', () => {
  let component: OfertasPensionAptoComponent;
  let fixture: ComponentFixture<OfertasPensionAptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasPensionAptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasPensionAptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
