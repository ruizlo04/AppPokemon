import { TestBed } from '@angular/core/testing';

import { EvoService } from './evo.service';

describe('EvoService', () => {
  let service: EvoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
