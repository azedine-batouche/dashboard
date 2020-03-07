import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, switchMap, delay } from 'rxjs/operators';
import { Weather } from './interfaces/weather';
import { timer } from 'rxjs';
import { settings } from '../settings/settings';
import { imgExtension } from '../settings/imgExtension';
import { WeatherField } from './interfaces/weather-field.enum';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  private weather: Weather;
  private lon = '0';
  private lat = '0';
  private intervalWeather = 43200000; // interval set at 12h

  constructor(private http: HttpClient) {}

  getCurrentWeather() {
    this.getPosition();
    return timer(0, this.intervalWeather).pipe(
      delay(5000),
      switchMap(() => this.getPosition())
    );
  }

  private getPosition() {
    const options = {
      enableHighAccuracy: true, // use gps to determine the position
      timeout: 3000, // wait 6 seconds to get the current position
      maximumAge: 1000 * 60 * 60 // save the position 1h in the cache browser
    };
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        position => this.setPosition(position),
        err => this.failPosition(err),
        options
      );
    } else {
      this.getCoordsThrewUrl();
    }
    if (this.lat === '0' && this.lon === '0') {
      this.getCoordsThrewUrl();
    }
    return this.getWeather();
  }
  private setPosition(position): void {
    this.lon = position.coords.longitude.toString();
    this.lat = position.coords.latitude.toString();
  }
  private failPosition(err): void {
    this.getCoordsThrewUrl();
  }

  private getCoordsThrewUrl(): void {
    this.http.get(settings.URL_GET_COORDS).subscribe((data: JSON) => {
      (this.lat = data[WeatherField.lat]), (this.lon = data[WeatherField.lon]);
    });
  }

  private getWeather() {
    const param = new HttpParams()
      .set('lat', this.lat)
      .set('lon', this.lon)
      .set('units', 'metric') // Get temperature in celsius
      .set('appid', settings.WEATHERS_API_KEY)
      .set('lang', settings.LANG);

    return this.http
      .get(settings.API_WEATHERS_URL, { params: param })
      .pipe(map(response => this.mapDataFormWeatherApi(response)));
  }

  private mapDataFormWeatherApi(data: any | undefined): Weather {
    this.weather = data[WeatherField.weather][0];
    this.weather.name = data[WeatherField.name];
    this.weather.icon = this.getWeatherIcon(this.weather.icon);
    this.weather.temperature = Math.floor(data[WeatherField.main].temp);
    return this.weather;
  }

  private getWeatherIcon(iconName: string): string {
    return settings.PATH_IMG_LOCAL + iconName + imgExtension.png;
  }
}
