import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { settings } from '../settings/settings';
import { RatpTraffic } from './interfaces/ratp-traffic';

@Injectable({
  providedIn: 'root'
})
export class DataTraficRatpService {
  private refreshTrafficTime: number = 1000 * 60 * 60 * 24; // 1 day
  private metroTraffic: RatpTraffic;
  private rerTraffic: RatpTraffic;
  private listTraffic: any;

  constructor(private http: HttpClient) {}

  getCurrentRatpTraffic() {
    return timer(0, this.refreshTrafficTime).pipe(map(() => this.getRatpTraffic()));
  }
  getRatpTraffic() {
    return this.http.get(settings.API_RATP_URL);
  }
}
