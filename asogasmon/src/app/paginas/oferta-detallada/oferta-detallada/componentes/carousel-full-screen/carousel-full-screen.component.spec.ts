import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFullScreenComponent } from './carousel-full-screen.component';

describe('CarouselFullScreenComponent', () => {
  let component: CarouselFullScreenComponent;
  let fixture: ComponentFixture<CarouselFullScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselFullScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
