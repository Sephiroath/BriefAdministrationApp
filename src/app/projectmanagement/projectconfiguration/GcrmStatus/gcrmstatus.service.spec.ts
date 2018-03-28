import { TestBed, inject } from '@angular/core/testing';

import { GcrmstatusService } from './gcrmstatus.service';

describe('GcrmstatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GcrmstatusService]
    });
  });

  it('should be created', inject([GcrmstatusService], (service: GcrmstatusService) => {
    expect(service).toBeTruthy();
  }));
});
