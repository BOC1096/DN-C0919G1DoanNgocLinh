import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XemloimoiketbanComponent } from './xemloimoiketban.component';

describe('XemloimoiketbanComponent', () => {
  let component: XemloimoiketbanComponent;
  let fixture: ComponentFixture<XemloimoiketbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XemloimoiketbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XemloimoiketbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
