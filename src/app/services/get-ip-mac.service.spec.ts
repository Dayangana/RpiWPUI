import { TestBed } from '@angular/core/testing';

import { GetIpMacService } from './get-ip-mac.service';

describe('GetIpMacService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetIpMacService = TestBed.get(GetIpMacService);
    expect(service).toBeTruthy();
  });
});
