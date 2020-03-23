import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GiphyImage } from './interfaces/giphy-image';
import { settings } from '../settings/settings';

@Injectable({
  providedIn: 'root'
})
export class GiphyDataService {
  private timer = timer(0, 600000); // 10 minutes + start now
  private offsetMax = 100;
  private q: string;

  constructor(private http: HttpClient) {}

  public getImages(q: string): Observable<GiphyImage[]> {
    this.q = q;
    return this.timer.pipe(switchMap(() => this.getGiphyImages(q)));
  }

  private getGiphyImages(q: string): Observable<GiphyImage[]> {
    const param = new HttpParams()
      .set('q', q)
      .set('limit', '100')
      .set('rating', 'g')
      .set('offset', (Math.floor(Math.random() * this.offsetMax) + 1).toString())
      .set('api_key', settings.GIPHY_API_KEY);

    return this.http
      .get('//api.giphy.com/v1/gifs/search', { params: param })
      .pipe(map(response => this.mapDataFromApi(response)));
  }
  private mapDataFromApi(response: any | undefined): GiphyImage[] {
    this.offsetMax = response.pagination.total_count - 100;

    if (response.data.length === 0) {
      this.getGiphyImages(this.q);
    }

    const images = [];

    for (const data of response.data) {
      const image: GiphyImage = data.images.fixed_height;

      // Add only landscape image
      if (image.width > image.height) {
        images.push(image);
      }
    }
    return images;
  }
}
