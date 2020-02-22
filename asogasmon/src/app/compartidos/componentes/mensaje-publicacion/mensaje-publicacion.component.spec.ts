import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajePublicacionComponent } from './mensaje-publicacion.component';

describe('MensajePublicacionComponent', () => {
  let component: MensajePublicacionComponent;
  let fixture: ComponentFixture<MensajePublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajePublicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajePublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
