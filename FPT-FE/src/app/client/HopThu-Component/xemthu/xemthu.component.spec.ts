import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XemthuComponent } from './xemthu.component';

describe('XemthuComponent', () => {
  let component: XemthuComponent;
  let fixture: ComponentFixture<XemthuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XemthuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XemthuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
