import { TestBed } from '@angular/core/testing';

import { AvocatsService } from './avocats.service';

describe('AvocatsService', () => {
  let service: AvocatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvocatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
