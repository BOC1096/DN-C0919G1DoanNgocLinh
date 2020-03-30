import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiloimoiketbanComponent } from './guiloimoiketban.component';

describe('GuiloimoiketbanComponent', () => {
  let component: GuiloimoiketbanComponent;
  let fixture: ComponentFixture<GuiloimoiketbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiloimoiketbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiloimoiketbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
