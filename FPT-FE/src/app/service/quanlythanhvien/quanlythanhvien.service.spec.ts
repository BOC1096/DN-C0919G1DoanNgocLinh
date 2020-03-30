import { TestBed } from '@angular/core/testing';

import { QuanlythanhvienService } from './quanlythanhvien.service';

describe('QuanlythanhvienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuanlythanhvienService = TestBed.get(QuanlythanhvienService);
    expect(service).toBeTruthy();
  });
});
