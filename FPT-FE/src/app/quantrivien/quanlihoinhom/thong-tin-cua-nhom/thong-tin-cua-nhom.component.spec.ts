import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinCuaNhomComponent } from './thong-tin-cua-nhom.component';

describe('ThongTinCuaNhomComponent', () => {
  let component: ThongTinCuaNhomComponent;
  let fixture: ComponentFixture<ThongTinCuaNhomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinCuaNhomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinCuaNhomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
