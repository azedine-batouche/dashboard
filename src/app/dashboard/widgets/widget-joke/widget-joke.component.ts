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
  private restTime: number = 15;
  private progressBarInt: number = 100;
  oui: boolean = false;
  a: any;

  constructor(private dataJokeService: DataJokeService) {}

  @Input() data: DashboardGridsterItem;

  private getJokeData(): Joke {
    return (this.joke = this.dataJokeService.getJoke());
  }

  intervals() {
    return interval(200)
      .pipe(map(() => (this.progressBarInt -= 1)))
      .subscribe(time => {
        this.progressBarPourcente.next(time), console.log('time:' + this.progressBarPourcente.getValue());
      });
  }

  private progressbartime() {
    this.a = timer(10000, 14000)
      .pipe(map(() => this.intervals()))
      .subscribe();
    timer(14000, 24000).pipe(map(() => this.a.unsubscrible()));
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
        this.timeShow.next(displaySecond), this.progressbartime();
      });
  }
}
