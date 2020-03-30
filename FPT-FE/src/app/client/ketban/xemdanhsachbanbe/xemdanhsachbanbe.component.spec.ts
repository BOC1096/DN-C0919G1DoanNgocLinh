import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XemdanhsachbanbeComponent } from './xemdanhsachbanbe.component';

describe('XemdanhsachbanbeComponent', () => {
  let component: XemdanhsachbanbeComponent;
  let fixture: ComponentFixture<XemdanhsachbanbeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XemdanhsachbanbeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XemdanhsachbanbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
