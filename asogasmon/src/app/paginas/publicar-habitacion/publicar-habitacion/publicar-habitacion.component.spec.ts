import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarHabitacionComponent } from './publicar-habitacion.component';

describe('PublicarHabitacionComponent', () => {
  let component: PublicarHabitacionComponent;
  let fixture: ComponentFixture<PublicarHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
