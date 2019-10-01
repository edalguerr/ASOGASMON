import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarArticuloComponent } from './publicar-articulo.component';

describe('PublicarArticuloComponent', () => {
  let component: PublicarArticuloComponent;
  let fixture: ComponentFixture<PublicarArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
