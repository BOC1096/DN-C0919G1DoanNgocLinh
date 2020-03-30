import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderQTVComponent } from './header-qtv.component';

describe('HeaderQTVComponent', () => {
  let component: HeaderQTVComponent;
  let fixture: ComponentFixture<HeaderQTVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderQTVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderQTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
