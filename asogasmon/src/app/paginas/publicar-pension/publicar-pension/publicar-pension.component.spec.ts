import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarPensionComponent } from './publicar-pension.component';

describe('PublicarPensionComponent', () => {
  let component: PublicarPensionComponent;
  let fixture: ComponentFixture<PublicarPensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarPensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
