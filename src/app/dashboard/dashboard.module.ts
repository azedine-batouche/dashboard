import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutesModule } from './dashboard.routes';
import { GridsterModule } from 'angular-gridster2';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';
import { WidgetContainerComponent } from './widget-container.component';
import { WidgetHostDirective } from './widget-host.directive';
import { HttpClientModule } from '@angular/common/http';
import { WidgetGiphyComponent } from './widgets/widget-giphy/widget-giphy.component';
import { WidgetDateComponent } from './widgets/widget-date/widget-date.component';
import { WidgetWeatherComponent } from './widgets/widget-weather/widget-weather.component';
import { WidgetNewsComponent } from './widgets/widget-news/widget-news.component';
import { WidgetMoviesComponent } from './widgets/widget-movies/widget-movies.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { WidgetGithubComponent } from './widgets/widget-github/widget-github.component';
import { WidgetDashboardSourceComponent } from './widgets/widget-dashboard-source/widget-dashboard-source.component';
import { WidgetFacebookComponent } from './widgets/widget-facebook/widget-facebook.component';
import { WidgetBitbucketComponent } from './widgets/widget-bitbucket/widget-bitbucket.component';
import { TimePipe } from './pipes/time.pipe';
import { WidgetJokeComponent } from './widgets/widget-joke/widget-joke.component';
import { WidgetRatpTraficComponent } from './widgets/widget-ratp-trafic/widget-ratp-trafic.component';
import { MessageColorPipe } from './widgets/widget-ratp-trafic/pipes/message-color.pipe';
import { LineRatpTagPipe } from './pipes/line-ratp-tag.pipe';
import { TypeLinePipe } from './widgets/widget-ratp-trafic/pipes/type-line.pipe';
import { TypeCssPipe } from './widgets/widget-ratp-trafic/pipes/type-css.pipe';
import { MatProgressBarModule } from '@angular/material';
import { WidgetParisComponent } from './widgets/widget-paris/widget-paris.component';

@NgModule({
  declarations: [
    DashboardComponent,
    WidgetContainerComponent,
    WidgetHostDirective,
    WidgetGiphyComponent,
    WidgetDateComponent,
    WidgetWeatherComponent,
    WidgetNewsComponent,
    WidgetMoviesComponent,
    WidgetGithubComponent,
    WidgetDashboardSourceComponent,
    WidgetFacebookComponent,
    WidgetBitbucketComponent,
    TimePipe,
    WidgetJokeComponent,
    WidgetRatpTraficComponent,
    MessageColorPipe,
    LineRatpTagPipe,
    TypeLinePipe,
    TypeCssPipe,
    WidgetParisComponent,
    WidgetParisComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutesModule,
    GridsterModule,
    HttpClientModule,
    NgbModule,
    ChartsModule,
    MatProgressBarModule
  ],
  exports: [LineRatpTagPipe, TypeCssPipe],
  providers: [DashboardGridsterConfigService],
  entryComponents: [
    WidgetGiphyComponent,
    WidgetDateComponent,
    WidgetWeatherComponent,
    WidgetNewsComponent,
    WidgetMoviesComponent,
    WidgetGithubComponent,
    WidgetDashboardSourceComponent,
    WidgetFacebookComponent,
    WidgetBitbucketComponent,
    WidgetJokeComponent,
    WidgetRatpTraficComponent,
    WidgetParisComponent
  ]
})
export class DashboardModule {}
