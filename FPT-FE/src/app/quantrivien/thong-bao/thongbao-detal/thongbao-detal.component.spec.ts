import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongbaoDetalComponent } from './thongbao-detal.component';

describe('ThongbaoDetalComponent', () => {
  let component: ThongbaoDetalComponent;
  let fixture: ComponentFixture<ThongbaoDetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongbaoDetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongbaoDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
