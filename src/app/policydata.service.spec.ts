import { TestBed } from '@angular/core/testing';

import { PolicydataService } from './policydata.service';

describe('PolicydataService', () => {
  let service: PolicydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
