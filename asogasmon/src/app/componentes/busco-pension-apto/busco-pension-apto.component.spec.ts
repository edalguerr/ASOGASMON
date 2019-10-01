import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscoPensionAptoComponent } from './busco-pension-apto.component';

describe('BuscoPensionAptoComponent', () => {
  let component: BuscoPensionAptoComponent;
  let fixture: ComponentFixture<BuscoPensionAptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscoPensionAptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscoPensionAptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
