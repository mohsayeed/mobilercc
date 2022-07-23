import { TestBed } from '@angular/core/testing';

import { DailyratesService } from './dailyrates.service';

describe('DailyratesService', () => {
  let service: DailyratesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyratesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
