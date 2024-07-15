import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';
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
  public chart: any;
  public loading: boolean = true;
  public nameCity: string = '';

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeathersForecastDataService
  ) {}

  dataChart: any = {
    type: 'line',

    data: {
      labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      datasets: [
        {
          label: 'Afternoon Temperature ',
          data: [],
          fill: false,
          borderColor: 'rgb(255, 151, 0)',
          tension: 0.1,
        },
        {
          label: 'Night Temperature ',
          data: [],
          fill: false,
          borderColor: 'rgb(13, 27, 255)',
          tension: 0.1,
        },
      ],
    },
    options: {
      legend: {
        display: true,
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {},
    },
  };

  createChart() {
    console.log(this.dataChart);
    this.chart = new Chart('chartForecastWeather', this.dataChart);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(async (params) => {
      this.loading = true;
      this.nameCity = await this.weatherService.getNameCity(
        params.get('nameCity') ?? ''
      );
      let responseWeather = await this.weatherService.getWeatherForecast(
        params.get('nameCity') ?? ''
      );

      //Put Afternoon temperature
      this.dataChart.data.datasets[0].data = responseWeather
        ?.filter((data: any) => data.isDayTime)
        .map((data: any) => data.temperature);
      //Put Night temperature

      this.dataChart.data.datasets[1].data = responseWeather
        ?.filter((data: any) => !data.isDayTime)
        .map((data: any) => data.temperature);

      const weatherIcons = {
        id: 'weatherIcons',
        afterDraw: function (
          chart: Chart<'bar' | 'line' | 'pie', number[], unknown>
        ) {
          const ctx = chart.ctx;
          for (let i = 0; i < 7; i++) {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.src =
              'https://api.weather.gov/icons/land/day/tsra_hi,20?size=medium'; // Ruta de la imagen
            img.onload = function () {
              ctx.drawImage(img, 40 * i, 60, 600, 600); // Coordenadas x, y y tamaño w, h de la imagen
              chart.update();
            };
          }
        },
      };
      this.dataChart.options.plugins = { weatherIcons: weatherIcons };

      this.createChart();
      this.loading = false;
    });
  }
}
