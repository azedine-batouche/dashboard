import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { News } from './interfaces/news';
import { settings } from '../settings/settings';
import { NewsField } from './interfaces/news-field.enum';

@Injectable({
  providedIn: 'root'
})
export class DataNewsService {
  private refreshNews = 6000000; // 1h
  private news: News = { totalResults: 0, articles: [] };

  constructor(private http: HttpClient) {}

  getNews() {
    return timer(0, this.refreshNews).pipe(switchMap(() => this.getCurrentNews()));
  }

  private getCurrentNews() {
    const param = new HttpParams().set('country', settings.LANG).set('apiKey', settings.API_NEWS_KEY);
    return this.http.get(settings.API_NEWS_URL, { params: param }).pipe(map(news => this.mapDataNews(news)));
  }

  private mapDataNews(news: any | undefined): News {
    this.news.totalResults = parseInt(news[NewsField.totalResults], 10);
    this.news.totalResults = news[NewsField.totalResults];
    this.news.articles = news[NewsField.articles];
    return this.news;
  }
}
