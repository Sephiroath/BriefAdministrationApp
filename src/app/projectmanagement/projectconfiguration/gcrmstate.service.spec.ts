import { TestBed, inject } from '@angular/core/testing';

import { GcrmstateService } from './gcrmstate.service';

describe('GcrmstateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GcrmstateService]
    });
  });

  it('should be created', inject([GcrmstateService], (service: GcrmstateService) => {
    expect(service).toBeTruthy();
  }));
});
