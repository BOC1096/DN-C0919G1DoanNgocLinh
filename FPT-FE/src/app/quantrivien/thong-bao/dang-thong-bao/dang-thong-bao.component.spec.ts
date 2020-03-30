import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangThongBaoComponent } from './dang-thong-bao.component';

describe('DangThongBaoComponent', () => {
  let component: DangThongBaoComponent;
  let fixture: ComponentFixture<DangThongBaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangThongBaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangThongBaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
