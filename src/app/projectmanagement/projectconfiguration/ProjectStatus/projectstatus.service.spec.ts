import { TestBed, inject } from '@angular/core/testing';

import { ProjectstatusService } from './projectstatus.service';

describe('ProjectstatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectstatusService]
    });
  });

  it('should be created', inject([ProjectstatusService], (service: ProjectstatusService) => {
    expect(service).toBeTruthy();
  }));
});
