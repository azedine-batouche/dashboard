import { DashboardConfig } from 'src/app/dashboard/interfaces/dashboard-config';
import { WidgetGiphyComponent } from 'src/app/dashboard/widgets/widget-giphy/widget-giphy.component';
import { WidgetDateComponent } from 'src/app/dashboard/widgets/widget-date/widget-date.component';
import { WidgetWeatherComponent } from 'src/app/dashboard/widgets/widget-weather/widget-weather.component';
import { WidgetNewsComponent } from 'src/app/dashboard/widgets/widget-news/widget-news.component';
import { WidgetMoviesComponent } from 'src/app/dashboard/widgets/widget-movies/widget-movies.component';
import { WidgetGithubComponent } from 'src/app/dashboard/widgets/widget-github/widget-github.component';
import { WidgetDashboardSourceComponent } from 'src/app/dashboard/widgets/widget-dashboard-source/widget-dashboard-source.component';
import { WidgetBitbucketComponent } from 'src/app/dashboard/widgets/widget-bitbucket/widget-bitbucket.component';
import { WidgetJokeComponent } from 'src/app/dashboard/widgets/widget-joke/widget-joke.component';
import { WidgetRatpTraficComponent } from 'src/app/dashboard/widgets/widget-ratp-trafic/widget-ratp-trafic.component';
import { WidgetParisComponent } from 'src/app/dashboard/widgets/widget-paris/widget-paris.component';

const dashboardConfig: DashboardConfig = {
  items: [
    {
      cols: 1,
      rows: 1,
      y: 0,
      x: 0,
      widget: {
        component: WidgetDashboardSourceComponent,
        icon: ' fa fa-download',
        class: null,
        style: { 'background-color': '#6e5494' }
      }
    },
    {
      cols: 1,
      rows: 1,
      y: 0,
      x: 1,
      widget: {
        component: WidgetParisComponent,
        icon: 'fa fa-ravelry',
        class: 'null',
        style: { 'background-color': '#0085ad' }
      }
    },
    {
      cols: 1,
      rows: 1,
      y: 2,
      x: 2,
      widget: { component: WidgetJokeComponent, icon: 'fa fa-comments', class: 'bg-warning' }
    },
    {
      cols: 1,
      rows: 1,
      y: 0,
      x: 3,
      widget: { component: WidgetWeatherComponent, icon: null, class: 'bg-light text-dark' }
    },

    {
      cols: 1,
      rows: 1,
      y: 1,
      x: 0,
      widget: { component: WidgetGiphyComponent, icon: 'fa fa-video-camera', params: { q: 'funny' }, class: null }
    },
    {
      cols: 2,
      rows: 1,
      y: 1,
      x: 1,
      widget: { component: WidgetNewsComponent, icon: 'fa fa-globe', class: 'bg-light text-dark' }
    },
    { cols: 1, rows: 1, y: 1, x: 3, widget: { component: WidgetMoviesComponent, icon: 'fa fa-film', class: null } },

    {
      cols: 1,
      rows: 1,
      y: 2,
      x: 0,
      widget: {
        component: WidgetRatpTraficComponent,
        icon: 'fa fa-train',
        class: null,
        style: { 'background-color': '#009641' }
      }
    },
    {
      cols: 1,
      rows: 1,
      y: 2,
      x: 1,
      widget: { component: WidgetGithubComponent, icon: 'fi flaticon-github', class: 'bg-dark text-white' }
    },
    {
      cols: 1,
      rows: 1,
      y: 0,
      x: 2,
      widget: {
        component: WidgetBitbucketComponent,
        icon: 'fa fa-bitbucket',
        class: 'null',
        style: { 'background-color': '#205081' }
      }
    },

    {
      cols: 1,
      rows: 1,
      y: 2,
      x: 3,
      widget: { component: WidgetDateComponent, icon: 'fa fa-clock-o', class: 'bg-success text-white' }
    }
  ]
};

export const environment = {
  production: false,
  dashboardConfig
};
