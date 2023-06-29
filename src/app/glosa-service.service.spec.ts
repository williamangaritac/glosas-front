import { TestBed } from '@angular/core/testing';

import { GlosaServiceService } from './glosa-service.service';

describe('GlosaServiceService', () => {
  let service: GlosaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlosaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
