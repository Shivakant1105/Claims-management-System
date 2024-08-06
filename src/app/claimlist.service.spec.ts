import { TestBed } from '@angular/core/testing';

import { ClaimlistService } from './claimlist.service';

describe('ClaimlistService', () => {
  let service: ClaimlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
