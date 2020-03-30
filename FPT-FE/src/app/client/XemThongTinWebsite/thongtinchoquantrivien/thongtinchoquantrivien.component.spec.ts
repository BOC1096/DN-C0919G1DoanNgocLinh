import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinchoquantrivienComponent } from './thongtinchoquantrivien.component';

describe('ThongtinchoquantrivienComponent', () => {
  let component: ThongtinchoquantrivienComponent;
  let fixture: ComponentFixture<ThongtinchoquantrivienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinchoquantrivienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinchoquantrivienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
