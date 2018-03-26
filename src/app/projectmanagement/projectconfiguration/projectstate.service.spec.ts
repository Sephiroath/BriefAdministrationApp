import { TestBed, inject } from '@angular/core/testing';

import { ProjectstateService } from './projectstate.service';

describe('ProjectstateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectstateService]
    });
  });

  it('should be created', inject([ProjectstateService], (service: ProjectstateService) => {
    expect(service).toBeTruthy();
  }));
});
