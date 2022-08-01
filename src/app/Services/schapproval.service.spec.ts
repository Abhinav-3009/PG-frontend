import { TestBed } from '@angular/core/testing';

import { SchapprovalService } from './schapproval.service';

describe('SchapprovalService', () => {
  let service: SchapprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchapprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
