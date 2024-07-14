import { TestBed } from '@angular/core/testing';

import { DataCitiesService } from './data-cities.service';

describe('DataCitiesService', () => {
  let service: DataCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
