import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosPensionAptoComponent } from './filtros-pension-apto.component';

describe('FiltrosPensionAptoComponent', () => {
  let component: FiltrosPensionAptoComponent;
  let fixture: ComponentFixture<FiltrosPensionAptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrosPensionAptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosPensionAptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
