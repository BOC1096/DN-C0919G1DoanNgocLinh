import { TestBed } from '@angular/core/testing';

import { LoadCssService } from './load-css.service';

describe('LoadCssService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadCssService = TestBed.get(LoadCssService);
    expect(service).toBeTruthy();
  });
});
