import { TestBed } from '@angular/core/testing';

import { ItmathserviceService } from './itmathservice.service';

describe('ItmathserviceService', () => {
  let service: ItmathserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItmathserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
