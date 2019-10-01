import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionAptoComponent } from './pension-apto.component';

describe('PensionAptoComponent', () => {
  let component: PensionAptoComponent;
  let fixture: ComponentFixture<PensionAptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionAptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionAptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
