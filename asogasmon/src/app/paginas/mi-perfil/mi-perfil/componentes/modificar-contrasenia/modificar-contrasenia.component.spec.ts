import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarContraseniaComponent } from './modificar-contrasenia.component';

describe('ModificarContraseniaComponent', () => {
  let component: ModificarContraseniaComponent;
  let fixture: ComponentFixture<ModificarContraseniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarContraseniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
