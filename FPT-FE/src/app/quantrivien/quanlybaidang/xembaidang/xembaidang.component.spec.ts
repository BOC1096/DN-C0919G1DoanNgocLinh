import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XembaidangComponent } from './xembaidang.component';

describe('XembaidangComponent', () => {
  let component: XembaidangComponent;
  let fixture: ComponentFixture<XembaidangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XembaidangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XembaidangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
