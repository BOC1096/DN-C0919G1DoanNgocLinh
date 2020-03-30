import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinchothanhvienComponent } from './thongtinchothanhvien.component';

describe('ThongtinchothanhvienComponent', () => {
  let component: ThongtinchothanhvienComponent;
  let fixture: ComponentFixture<ThongtinchothanhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinchothanhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinchothanhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
