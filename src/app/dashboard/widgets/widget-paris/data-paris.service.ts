import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { settings } from '../settings/settings';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataParisService {
  private timeRefresh: number = 1000 * 60 * 10; // 10 minutes

  constructor(private http: HttpClient) {}

  getParisEvent() {
    return timer(0, this.timeRefresh).pipe(map(() => this.getCurrentData()));
  }

  private getCurrentData() {
    const params = new HttpParams().set('dataset', 'que-faire-a-paris-').set('exclude.category', 'Concerts');
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const hraders = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get('https://opendata.paris.fr/api/v2/catalog/datasets', { headers: header });
  }

  private mapParisData(data: any) {
    console.log('paris data: ' + JSON.stringify(data));
  }
}
