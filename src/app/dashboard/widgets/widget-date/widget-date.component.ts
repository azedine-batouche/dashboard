import { Component, OnInit, Input, LOCALE_ID } from '@angular/core';
import { DateDataService } from './date-data.service';
import { DashboardGridsterItem } from '../../interfaces/dashboard-gridster-item';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-widget-date',
  template: `
    <div class="ctn" [ngStyle]="data.widget?.style">
      <h5>{{ time | async | date: 'EEE dd MMMM yyyy' | uppercase }}</h5>
      <br />
      <h1>{{ time | async | date: 'HH:mm:ss' }}</h1>
    </div>
  `,
  styleUrls: ['./widget-date.component.scss'],
  providers: [DateDataService, { provide: LOCALE_ID, useValue: 'FR-fr' }]
})
export class WidgetDateComponent implements OnInit {
  public time;

  @Input() data: DashboardGridsterItem;

  constructor(private dateDataService: DateDataService) {}

  ngOnInit() {
    registerLocaleData(localeFr, 'fr-FR');
    this.getCurrentTime();
  }

  getCurrentTime(): void {
    this.time = this.dateDataService.getCurrentTime();
  }
}
