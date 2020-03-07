import { Component, OnInit, Input, LOCALE_ID } from '@angular/core';
import { DataMoviesService } from './data-movies.service';
import { DashboardGridsterItem } from '../../interfaces/dashboard-gridster-item';
import { Movies } from './interfaces/movies';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { settings } from '../settings/settings';

@Component({
  selector: 'app-widget-movies',
  templateUrl: './widget-movies.component.html',
  styleUrls: ['./widget-movies.component.scss'],
  providers: [DataMoviesService, { provide: LOCALE_ID, useValue: 'FR-fr' }]
})
export class WidgetMoviesComponent implements OnInit {
  protected lastMovies: Movies[];
  protected mainMovie: Movies;
  protected errorMovie: string;

  @Input() data: DashboardGridsterItem;

  constructor(private dataMovieService: DataMoviesService) {}

  private checkMovieImage(data: any | undefined) {
    if (data) {
      data.forEach((element, index, mydata) => {
        const idImage = element.poster_path;
        if (idImage && idImage !== '') {
          element.poster_path = settings.HTTP_PATH_IMG + idImage;
        } else {
          mydata.splice(index);
        }
      });
    }
  }

  private filterData(data: any | undefined) {
    this.lastMovies = data[0];
    this.lastMovies.concat(data[1]);
    this.checkMovieImage(this.lastMovies);
    this.mainMovie = this.lastMovies[0]; // set the first movie
    this.lastMovies.shift(); // delete first movie into the list movies
  }

  ngOnInit() {
    registerLocaleData(localeFr, 'fr-FR');
    this.dataMovieService.getMovies().subscribe(
      data => {
        this.filterData(data);
      },
      error => (this.errorMovie = error)
    );
  }
}
