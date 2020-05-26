import { TestBed } from '@angular/core/testing';

import { RestfulApiServiceService } from './restful-api-service.service';

describe('RestfulApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestfulApiServiceService = TestBed.get(RestfulApiServiceService);
    expect(service).toBeTruthy();
  });
});
