import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaEstaticoComponent } from './mapa-estatico.component';

describe('MapaEstaticoComponent', () => {
  let component: MapaEstaticoComponent;
  let fixture: ComponentFixture<MapaEstaticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaEstaticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaEstaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
