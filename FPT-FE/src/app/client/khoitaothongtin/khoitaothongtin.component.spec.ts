import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoitaothongtinComponent } from './khoitaothongtin.component';

describe('KhoitaothongtinComponent', () => {
  let component: KhoitaothongtinComponent;
  let fixture: ComponentFixture<KhoitaothongtinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhoitaothongtinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhoitaothongtinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
