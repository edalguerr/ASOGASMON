import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartirOfertaComponent } from './compartir-oferta.component';

describe('CompartirOfertaComponent', () => {
  let component: CompartirOfertaComponent;
  let fixture: ComponentFixture<CompartirOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompartirOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompartirOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
