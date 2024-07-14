import { TestBed } from '@angular/core/testing';

import { WeathersForecastDataService } from './weathers-forecast-data.service';

describe('WeathersForecastDataService', () => {
  let service: WeathersForecastDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeathersForecastDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
