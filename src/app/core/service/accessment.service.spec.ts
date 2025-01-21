import { TestBed } from '@angular/core/testing';

import { AccessmentService } from './accessment.service';

describe('AccessmentService', () => {
  let service: AccessmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
