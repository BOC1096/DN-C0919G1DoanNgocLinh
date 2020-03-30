import { TestBed } from '@angular/core/testing';

import { BaidangService } from './baidang.service';

describe('BaidangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaidangService = TestBed.get(BaidangService);
    expect(service).toBeTruthy();
  });
});
