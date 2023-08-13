import { TestBed } from '@angular/core/testing';

import { DomainesService } from './domaines.service';

describe('DomainesService', () => {
  let service: DomainesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
