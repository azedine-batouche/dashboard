import { Component, OnInit, Input } from '@angular/core';
import { WeatherDataService } from './weather-data.service';
import { DashboardGridsterItem } from '../../interfaces/dashboard-gridster-item';
import { Weather } from './interfaces/weather';
import { HttpError } from '../../interfaces/http-error';

@Component({
  selector: 'app-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.scss'],
  providers: [WeatherDataService]
})
export class WidgetWeatherComponent implements OnInit {
  constructor(private weatherDataService: WeatherDataService) {}

  weather: Weather;
  error: HttpError;
  loading: boolean;

  @Input() data: DashboardGridsterItem;

  private getWeather() {
    return this.weatherDataService
      .getCurrentWeather()
      .pipe()
      .subscribe(
        data => (this.weather = data),
        error => {
          (this.error = error.error), (this.loading = false);
        },
        () => (this.loading = false)
      );
  }

  ngOnInit() {
    this.loading = true;
    this.getWeather();
  }
}
