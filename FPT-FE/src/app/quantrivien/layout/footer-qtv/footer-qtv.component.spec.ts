import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterQTVComponent } from './footer-qtv.component';

describe('FooterQTVComponent', () => {
  let component: FooterQTVComponent;
  let fixture: ComponentFixture<FooterQTVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterQTVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterQTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
