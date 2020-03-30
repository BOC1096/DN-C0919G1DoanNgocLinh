import { TestBed } from '@angular/core/testing';

import { BaocaoService } from './baocao.service';

describe('BaocaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaocaoService = TestBed.get(BaocaoService);
    expect(service).toBeTruthy();
  });
});
