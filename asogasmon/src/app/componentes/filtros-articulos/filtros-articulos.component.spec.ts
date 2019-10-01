import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosArticulosComponent } from './filtros-articulos.component';

describe('FiltrosArticulosComponent', () => {
  let component: FiltrosArticulosComponent;
  let fixture: ComponentFixture<FiltrosArticulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrosArticulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
