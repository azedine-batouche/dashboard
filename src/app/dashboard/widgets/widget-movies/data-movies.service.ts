import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { timer, forkJoin, concat } from 'rxjs';
import { switchMap, map, concatMap, concatAll, mergeAll } from 'rxjs/operators';
import { Movies } from './interfaces/movies';
import { settings } from '../settings/settings';
import { MoviesField } from './interfaces/movies-field.enum';

@Injectable({
  providedIn: 'root'
})
export class DataMoviesService {
  private INTERVAL_REFRESH: number = 1000 * 60 * 10; // 10 minutes;
  private listMovie: Movies[] = [];
  private nbPage = 3;
  data: any;
  constructor(private http: HttpClient) {}

  getMovies() {
    while (this.listMovie.length === 0) {
      return timer(0, this.INTERVAL_REFRESH).pipe(switchMap(() => this.getListMovies()));
    }
  }

  private randomPage(): string {
    return (Math.floor(Math.random() * this.nbPage) + 1).toString();
  }

  private getListMovies() {
    const param = new HttpParams()
      .set('page', '2')
      .set('api_key', settings.MOVIES_API_KEY)
      .set('language', settings.LANGUAGE);
    const a = this.http.get(settings.API_MOVIES_URL, { params: param });

    const para = new HttpParams()
      .set('page', '1')
      .set('api_key', settings.MOVIES_API_KEY)
      .set('language', settings.LANGUAGE);
    const b = this.http.get(settings.API_MOVIES_URL, { params: para });

    const par = new HttpParams()
      .set('page', '3')
      .set('api_key', settings.MOVIES_API_KEY)
      .set('language', settings.LANGUAGE);
    const c = this.http.get(settings.API_MOVIES_URL, { params: par });

    return forkJoin(a, b, c).pipe(map(data => this.mapDataApi(data)));
  }

  private mapDataApi(data: any | undefined) {
    let tmpMovie: Movies = { title: '', release_date: '', overview: '', poster_path: '' };
    data.forEach(element => {
      const itemValue = 'results';
      element[itemValue].forEach(movie => {
        if (
          Date.parse(movie[MoviesField.release_date]) >= new Date().getTime() &&
          movie[MoviesField.path_img] !== '' &&
          movie[MoviesField.path_img] !== null
        ) {
          tmpMovie.title = movie[MoviesField.title];
          tmpMovie.release_date = movie[MoviesField.release_date];
          tmpMovie.poster_path = movie[MoviesField.path_img];
          this.listMovie.push(tmpMovie);
          tmpMovie = { title: '', release_date: '', overview: '', poster_path: '' };
        }
      });
    });
    return this.listMovie;
  }
}
