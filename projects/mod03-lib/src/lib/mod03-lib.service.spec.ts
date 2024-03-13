import { TestBed } from '@angular/core/testing';

import { Mod03LibService } from './mod03-lib.service';

describe('Mod03LibService', () => {
  let service: Mod03LibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mod03LibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
