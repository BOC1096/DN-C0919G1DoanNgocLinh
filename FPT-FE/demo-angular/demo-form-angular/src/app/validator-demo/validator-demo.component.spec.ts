import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorDemoComponent } from './validator-demo.component';

describe('ValidatorDemoComponent', () => {
  let component: ValidatorDemoComponent;
  let fixture: ComponentFixture<ValidatorDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
