import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachHoiNhomComponent } from './danh-sach-hoi-nhom.component';

describe('DanhSachHoiNhomComponent', () => {
  let component: DanhSachHoiNhomComponent;
  let fixture: ComponentFixture<DanhSachHoiNhomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachHoiNhomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachHoiNhomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
