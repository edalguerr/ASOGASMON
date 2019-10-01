import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarCasaAptoComponent } from './publicar-casa-apto.component';

describe('PublicarCasaAptoComponent', () => {
  let component: PublicarCasaAptoComponent;
  let fixture: ComponentFixture<PublicarCasaAptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarCasaAptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarCasaAptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
