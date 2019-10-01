import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBuscoPensionAptoComponent } from './slide-busco-pension-apto.component';

describe('SlideBuscoPensionAptoComponent', () => {
  let component: SlideBuscoPensionAptoComponent;
  let fixture: ComponentFixture<SlideBuscoPensionAptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideBuscoPensionAptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideBuscoPensionAptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
