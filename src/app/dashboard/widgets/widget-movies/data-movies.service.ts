import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { timer, forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Movies } from './interfaces/movies';
import { settings } from '../settings/settings';

@Injectable({
  providedIn: 'root'
})
export class DataMoviesService {
  private INTERVAL_REFRESH: number = 1000 * 60 * 10; // 10 minutes;
  private listMovie: Movies[] = [];
  private nbPage: number = 3;
  data: any;
  constructor(private http: HttpClient) {}

  getMovies() {
    return timer(0, this.INTERVAL_REFRESH).pipe(switchMap(() => this.getListMovies()));
  }

  private randomPage(): string {
    return (Math.floor(Math.random() * this.nbPage) + 1).toString();
  }

  private getListMovies() {
    const params = new HttpParams()
      .set('page', '2')
      .set('api_key', settings.MOVIES_API_KEY)
      .set('language', settings.LANGUAGE);
    let a = this.http.get(settings.API_MOVIES_URL, { params: params }).pipe(map(data => this.mapDataApi(data)));
    const param = new HttpParams()
      .set('page', '4')
      .set('api_key', settings.MOVIES_API_KEY)
      .set('language', settings.LANGUAGE);
    let b = this.http.get(settings.API_MOVIES_URL, { params: param }).pipe(map(data => this.mapDataApi(data)));
    return forkJoin([a, b]);
  }

  private mapDataApi(data: any | undefined) {
    let tmpMovie: Movies = { title: '', release_date: '', overview: '', poster_path: '' };
    if (data.results) {
      data.results.forEach(movie => {
        if (Date.parse(movie['release_date']) >= new Date().getTime()) {
          tmpMovie.title = movie['title'];
          tmpMovie.release_date = movie['release_date'];
          if (movie['backdrop_path'] !== null) {
            tmpMovie.poster_path = movie['backdrop_path'];
          }
          this.listMovie.push(tmpMovie);
          tmpMovie = { title: '', release_date: '', overview: '', poster_path: '' };
        }
      });
    }
    return this.listMovie;
  }
}
