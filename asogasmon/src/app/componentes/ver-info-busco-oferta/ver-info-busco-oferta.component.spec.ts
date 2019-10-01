import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoBuscoOfertaComponent } from './ver-info-busco-oferta.component';

describe('VerInfoBuscoOfertaComponent', () => {
  let component: VerInfoBuscoOfertaComponent;
  let fixture: ComponentFixture<VerInfoBuscoOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInfoBuscoOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInfoBuscoOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
