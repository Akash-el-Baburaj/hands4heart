import { TestBed } from '@angular/core/testing';

import { PhonepeService } from './phonepe.service';

describe('PhonepeService', () => {
  let service: PhonepeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonepeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
