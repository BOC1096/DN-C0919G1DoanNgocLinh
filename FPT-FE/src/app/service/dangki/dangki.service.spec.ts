import { TestBed } from '@angular/core/testing';

import { DangkiService } from './dangki.service';

describe('DangkiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DangkiService = TestBed.get(DangkiService);
    expect(service).toBeTruthy();
  });
});
