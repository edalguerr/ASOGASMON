import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReestablecerContraseniaComponent } from './reestablecer-contrasenia.component';

describe('ReestablecerContraseniaComponent', () => {
  let component: ReestablecerContraseniaComponent;
  let fixture: ComponentFixture<ReestablecerContraseniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReestablecerContraseniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReestablecerContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
