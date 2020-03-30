import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlyhopthuComponent } from './quanlyhopthu.component';

describe('QuanlyhopthuComponent', () => {
  let component: QuanlyhopthuComponent;
  let fixture: ComponentFixture<QuanlyhopthuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlyhopthuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlyhopthuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
