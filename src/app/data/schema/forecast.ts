export interface Forecast {
  id: number;
  isDayTime: boolean;
  temperature: number;
  temperatureUnit: string;
  windSpeed: string;
  windDirection: string;
  iconWeather: string;
  day: string;
}
