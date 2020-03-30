import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachbaidangComponent } from './danhsachbaidang.component';

describe('DanhsachbaidangComponent', () => {
  let component: DanhsachbaidangComponent;
  let fixture: ComponentFixture<DanhsachbaidangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachbaidangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachbaidangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
