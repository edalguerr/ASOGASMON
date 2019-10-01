import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactarOfertaDetalladaComponent } from './contactar-oferta-detallada.component';

describe('ContactarOfertaDetalladaComponent', () => {
  let component: ContactarOfertaDetalladaComponent;
  let fixture: ComponentFixture<ContactarOfertaDetalladaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactarOfertaDetalladaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactarOfertaDetalladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
