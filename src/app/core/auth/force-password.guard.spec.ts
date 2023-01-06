import { TestBed } from '@angular/core/testing';

import { ForcePasswordGuard } from './force-password.guard';

describe('ForcePasswordGuard', () => {
  let guard: ForcePasswordGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ForcePasswordGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
