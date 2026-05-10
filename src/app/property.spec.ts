import { TestBed } from '@angular/core/testing';

import { PropertyService } from './property';

describe('PropertyService', () => {
  let service: PropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Property);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
