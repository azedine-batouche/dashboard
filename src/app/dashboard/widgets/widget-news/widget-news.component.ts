import { Component, OnInit, Input } from '@angular/core';
import { DataNewsService } from './data-news.service';
import { News } from './interfaces/news';
import { DashboardGridsterItem } from '../../interfaces/dashboard-gridster-item';
import { Article } from './interfaces/article';
import { Observable, interval, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-widget-news',
  templateUrl: './widget-news.component.html',
  styleUrls: ['./widget-news.component.scss'],
  providers: [DataNewsService]
})
export class WidgetNewsComponent implements OnInit {
  private PATH_IMG: string = './assets/imgs/unknow-news.jpg';
  public updatedNews: Observable<number>;
  private currentNews: News;
  protected listArticle: Article[];
  protected mainArticle: Article;
  protected errorNews: string;
  protected minutes = 0;
  lastUpdate: BehaviorSubject<number> = new BehaviorSubject(0);

  @Input() data: DashboardGridsterItem;

  constructor(private dataNewsService: DataNewsService) {}

  private filterNews(news: any): void {
    this.currentNews = news;
    this.listArticle = this.currentNews.articles;
    this.listArticle.forEach(elt => {
      elt.urlToImage = elt.urlToImage !== null ? elt.urlToImage : this.PATH_IMG;
      if (elt.description === '' && elt.content) {
        elt.description = elt.content.substring(0, 200) + '...';
      }
      elt.description = elt.description !== null ? elt.description.substring(0, 200) + '...' : '';
    });
    this.mainArticle = this.listArticle[0];
    this.listArticle.shift();
  }

  private displayTimeNewsUpdated() {
    interval(60000)
      .pipe(map(() => (this.minutes += 1)))
      .subscribe(time => this.lastUpdate.next(time));
  }

  ngOnInit() {
    this.dataNewsService.getNews().subscribe(
      news => {
        this.filterNews(news), this.displayTimeNewsUpdated();
      },
      errors => (this.errorNews = errors.error.message)
    );
  }
}
