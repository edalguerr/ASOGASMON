import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideImagenesPrincipalComponent } from './slide-imagenes-principal.component';

describe('SlideImagenesPrincipalComponent', () => {
  let component: SlideImagenesPrincipalComponent;
  let fixture: ComponentFixture<SlideImagenesPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideImagenesPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideImagenesPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
