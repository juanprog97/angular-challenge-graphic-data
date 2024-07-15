import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { Forecast } from '../../schema/forecast';
import { DataCitiesService } from '../../../data/services/dataCities/data-cities.service';
import { format, parseISO } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class WeathersForecastDataService {
  constructor(
    private http: HttpClient,
    private dataCityService: DataCitiesService
  ) {}

  cityRequest: string = '';
  dataForecastWeek: Forecast[] = [];

  private adapterDataWeather(data: any): Forecast {
    return {
      id: data.number,
      isDayTime: data.isDaytime,
      temperature: data.temperature,
      temperatureUnit: data.temperatureUnit,
      windSpeed: data.windSpeed,
      windDirection: data.windDirection,
      iconWeather: data.icon,
      day: format(parseISO(data.startTime), 'EEEE'),
    };
  }

  async getNameCity(city: string): Promise<any> {
    return await this.dataCityService.getNameCompleteCity(city);
  }

  async getWeatherForecast(nameCity: string): Promise<any> {
    this.cityRequest = nameCity;

    const urlRequestWeather = await this.dataCityService.getUrlRequestCity(
      nameCity
    );
    const dataWeather = await firstValueFrom(
      this.getDataWeatherRequest(urlRequestWeather)
    );

    this.dataForecastWeek = dataWeather.properties?.periods?.map(
      (data: any) => {
        return this.adapterDataWeather(data);
      }
    );
    return this.dataForecastWeek;
  }

  private getDataWeatherRequest(urlRequest: string): Observable<any> {
    return this.http.get(urlRequest);
  }
}
