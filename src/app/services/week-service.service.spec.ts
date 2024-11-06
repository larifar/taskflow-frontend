import { TestBed } from '@angular/core/testing';

import { WeekServiceService } from './week-service.service';

describe('WeekServiceService', () => {
  let service: WeekServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
