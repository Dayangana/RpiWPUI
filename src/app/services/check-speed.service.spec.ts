import { TestBed } from '@angular/core/testing';

import { CheckSpeedService } from './check-speed.service';

describe('CheckSpeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckSpeedService = TestBed.get(CheckSpeedService);
    expect(service).toBeTruthy();
  });
});
