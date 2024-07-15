import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { WeathersForecastDataService } from '../../data/services/weatherForecast/weathers-forecast-data.service';

@Component({
  selector: 'app-chart-grafic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-grafic.component.html',
  styleUrl: './chart-grafic.component.scss',
})
export class ChartGraficComponent implements OnInit {
  loading: boolean = true;
  dataWeather: any = [];
  nameCity: string = '';

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeathersForecastDataService
  ) {}

  createChart() {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.nameCity = params.get('nameCity') ?? '';
      this.weatherService.getWeatherForecast(this.nameCity);
      // console.log(this.nameCity);
    });
  }
}
