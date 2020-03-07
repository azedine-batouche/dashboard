import { GridsterItem } from 'angular-gridster2';

interface Widget {
  component: any;
  icon: string | null;
  class: string | null;
  style?: any | null;
  params?: any;
  imgPath?: string;
}

export interface DashboardGridsterItem extends GridsterItem {
  widget: Widget;
}
