import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuithuComponent } from './guithu.component';

describe('GuithuComponent', () => {
  let component: GuithuComponent;
  let fixture: ComponentFixture<GuithuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuithuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuithuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
