import { TestBed } from '@angular/core/testing';

import { ThuService } from './thu.service';

describe('ThuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThuService = TestBed.get(ThuService);
    expect(service).toBeTruthy();
  });
});
