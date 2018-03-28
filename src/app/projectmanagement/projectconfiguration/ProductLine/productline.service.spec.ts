import { TestBed, inject } from '@angular/core/testing';

import { ProductlineService } from './productline.service';

describe('ProductlineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductlineService]
    });
  });

  it('should be created', inject([ProductlineService], (service: ProductlineService) => {
    expect(service).toBeTruthy();
  }));
});
