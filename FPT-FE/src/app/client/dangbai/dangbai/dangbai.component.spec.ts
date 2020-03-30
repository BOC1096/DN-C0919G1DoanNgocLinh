import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangbaiComponent } from './dangbai.component';

describe('DangbaiComponent', () => {
  let component: DangbaiComponent;
  let fixture: ComponentFixture<DangbaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangbaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
