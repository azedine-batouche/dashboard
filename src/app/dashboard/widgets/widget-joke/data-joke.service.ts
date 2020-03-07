import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { settings } from '../settings/settings';
import { Joke } from './interfaces/joke';
import { JOKES } from './mock-joke';

@Injectable({
  providedIn: 'root'
})
export class DataJokeService {
  private refreshJokeTime: number = 1000 * 10; // 10 seconde
  private listJokes = JOKES;

  constructor(private http: HttpClient) {}

  public getCurrentJoke() {
    return timer(0, this.refreshJokeTime).pipe(map(() => this.getJoke()));
  }
  getJoke(): Joke {
    const randomJoke: number = Math.floor(Math.random() * 20) + 1;
    const joke = this.listJokes[randomJoke];
    return joke;
  }
}
