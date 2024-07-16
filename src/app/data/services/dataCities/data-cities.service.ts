import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataCitiesService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('assets/json/listCities.json');
  }
  async getUrlRequestCity(city: string): Promise<any> {
    const data = await firstValueFrom(this.getData());
    const urlCity = data.cities.filter((data: any) => data.shortname === city);
    return urlCity.length == 1 ? urlCity[0].apiurl : '';
  }

  async getNameCompleteCity(city: string): Promise<any> {
    const data = await firstValueFrom(this.getData());
    const urlCity = data.cities.filter((data: any) => data.shortname === city);
    return urlCity.length == 1 ? urlCity[0].name : '';
  }
}
