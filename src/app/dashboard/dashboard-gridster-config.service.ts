import { Injectable } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';

const DashboardGridsterConfig: GridsterConfig = {
  mobileBreakpoint: 640,
  minCols: 4,
  maxCols: 8,
  minRows: 3,
  maxRows: 5,
  defaultItemCols: 4,
  defaultItemRows: 3,
  maxItemCols: 5,
  maxItemRows: 8,
  minItemCols: 1,
  minItemRows: 1,
  minItemArea: 1,
  maxItemArea: 40
};

@Injectable({
  providedIn: 'root'
})
export class DashboardGridsterConfigService {
  constructor() {}

  getConfig(): GridsterConfig {
    return DashboardGridsterConfig;
  }
}
