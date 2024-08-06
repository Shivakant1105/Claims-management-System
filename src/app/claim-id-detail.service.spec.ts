import { TestBed } from '@angular/core/testing';

import { ClaimIdDetailService } from './claim-id-detail.service';

describe('ClaimIdDetailService', () => {
  let service: ClaimIdDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimIdDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
