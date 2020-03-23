import { Component, OnInit, Input } from '@angular/core';
import { DashboardGridsterItem } from '../../interfaces/dashboard-gridster-item';
import { DataJokeService } from './data-joke.service';
import { Joke } from './interfaces/joke';
import { HttpError } from '../../interfaces/http-error';
import { timer, BehaviorSubject, Observable, NEVER, of, interval } from 'rxjs';
import { map, delay, switchMap, filter, takeUntil, switchMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-widget-joke',
  templateUrl: './widget-joke.component.html',
  styleUrls: ['./widget-joke.component.scss'],
  providers: [DataJokeService]
})
export class WidgetJokeComponent implements OnInit {
  protected joke: Joke;
  protected error: HttpError;
  protected timeShow: BehaviorSubject<number> = new BehaviorSubject(15);
  protected time: BehaviorSubject<number> = new BehaviorSubject(15);
  protected progressBarPourcente: BehaviorSubject<number> = new BehaviorSubject(100);
  protected progressBarBoolean: BehaviorSubject<true>;
  protected countInit = 5;
  private restTime = 15;
  private progressBarInt = 100;

  constructor(private dataJokeService: DataJokeService) {}

  @Input() data: DashboardGridsterItem;

  private getJokeData(): Joke {
    return (this.joke = this.dataJokeService.getJoke());
  }

  ngOnInit() {
    timer(0, 15000)
      .pipe(map(() => this.getJokeData()))
      .subscribe(data => {
        (this.joke = data), (this.restTime = 15), this.progressBarPourcente.next(100), (this.progressBarInt = 100);
      });
    timer(0, 1000)
      .pipe(map(() => (this.restTime -= 1)))
      .subscribe(displaySecond => {
        this.timeShow.next(displaySecond);
      });
  }
}
