import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { News } from './interfaces/news';
import { settings } from '../settings/settings';

@Injectable({
  providedIn: 'root'
})
export class DataNewsService {
  private refreshNews: number = 6000000; // 1h
  private news: News = { totalResults: 0, articles: [] };

  constructor(private http: HttpClient) {}

  getNews() {
    return timer(0, this.refreshNews).pipe(switchMap(() => this.getCurrentNews()));
  }

  private getCurrentNews() {
    const params = new HttpParams().set('country', settings.LANG).set('apiKey', settings.API_NEWS_KEY);
    return this.http.get(settings.API_NEWS_URL, { params: params }).pipe(map(news => this.mapDataNews(news)));
  }

  private mapDataNews(news: any | undefined): News {
    this.news.totalResults = parseInt(news['totalResults']);
    this.news.totalResults = news['totalResults'];
    this.news.articles = news['articles'];
    return this.news;
  }
}
