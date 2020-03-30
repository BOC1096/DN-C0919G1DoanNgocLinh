import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinchokhachComponent } from './thongtinchokhach.component';

describe('ThongtinchokhachComponent', () => {
  let component: ThongtinchokhachComponent;
  let fixture: ComponentFixture<ThongtinchokhachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinchokhachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinchokhachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
