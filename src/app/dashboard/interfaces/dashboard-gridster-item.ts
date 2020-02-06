import { GridsterItem } from 'angular-gridster2';

interface Widget {
  icon: string | null;
  class: string | null;
}

export interface DashboardGridsterItem extends GridsterItem {
  widget: Widget;
}
