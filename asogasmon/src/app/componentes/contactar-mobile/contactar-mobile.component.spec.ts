import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactarMobileComponent } from './contactar-mobile.component';

describe('ContactarMobileComponent', () => {
  let component: ContactarMobileComponent;
  let fixture: ComponentFixture<ContactarMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactarMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
