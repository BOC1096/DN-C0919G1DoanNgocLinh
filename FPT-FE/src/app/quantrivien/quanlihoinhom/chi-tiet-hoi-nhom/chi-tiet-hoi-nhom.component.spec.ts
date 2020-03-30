import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietHoiNhomComponent } from './chi-tiet-hoi-nhom.component';

describe('ChiTietHoiNhomComponent', () => {
  let component: ChiTietHoiNhomComponent;
  let fixture: ComponentFixture<ChiTietHoiNhomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietHoiNhomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietHoiNhomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
