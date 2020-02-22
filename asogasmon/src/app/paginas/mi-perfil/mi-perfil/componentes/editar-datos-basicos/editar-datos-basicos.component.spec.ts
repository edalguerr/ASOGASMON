import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDatosBasicosComponent } from './editar-datos-basicos.component';

describe('EditarDatosBasicosComponent', () => {
  let component: EditarDatosBasicosComponent;
  let fixture: ComponentFixture<EditarDatosBasicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDatosBasicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDatosBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
