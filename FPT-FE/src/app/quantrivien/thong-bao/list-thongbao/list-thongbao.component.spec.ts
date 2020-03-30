import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThongbaoComponent } from './list-thongbao.component';

describe('ListThongbaoComponent', () => {
  let component: ListThongbaoComponent;
  let fixture: ComponentFixture<ListThongbaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListThongbaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListThongbaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
