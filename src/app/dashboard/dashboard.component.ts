import { Component, OnInit } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';
import { environment } from 'src/environments/environment';
import { DashboardGridsterItem } from './interfaces/dashboard-gridster-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  config: GridsterConfig;
  items: Array<DashboardGridsterItem>;

  constructor(private dashboardGridsterConfigService: DashboardGridsterConfigService) {}

  ngOnInit() {
    this.config = this.dashboardGridsterConfigService.getConfig();
    this.items = environment.dashboardConfig.items;
  }
}
