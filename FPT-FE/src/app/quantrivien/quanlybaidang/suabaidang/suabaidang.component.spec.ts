import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuabaidangComponent } from './suabaidang.component';

describe('SuabaidangComponent', () => {
  let component: SuabaidangComponent;
  let fixture: ComponentFixture<SuabaidangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuabaidangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuabaidangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
