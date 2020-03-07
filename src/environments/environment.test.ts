import { DashboardConfig } from 'src/app/dashboard/interfaces/dashboard-config';
import { HelloWorldComponent } from 'src/app/dashboard/widgets/hello-world/hello-world.component';
import { WidgetGiphyComponent } from 'src/app/dashboard/widgets/widget-giphy/widget-giphy.component';

const dashboardConfig: DashboardConfig = {
  items: [
    {
      cols: 1,
      rows: 2,
      y: 0,
      x: 0,
      widget: { component: HelloWorldComponent, icon: 'fa fa-magic', class: 'bg-primary' }
    },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: 'fa fa-google', class: 'bg-secondary' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: null, class: 'bg-success' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: 'fi flaticon-youtube', class: 'bg-danger' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: null, class: 'bg-warning' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: WidgetGiphyComponent, icon: null, class: 'bg-info' } },
    {
      cols: 2,
      rows: 1,
      y: 0,
      x: 0,
      widget: { component: HelloWorldComponent, icon: null, class: 'bg-light text-dark' }
    },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: 'fa fa-bitcoin', class: 'bg-dark' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: 'fa fa-download', class: 'bg-white text-dark' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: 'fi flaticon-github', class: 'bg-primary' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: null, class: 'bg-secondary' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: null, class: 'bg-success' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: 'fa fa-warning', class: 'bg-danger' } }
  ]
};

export const environment = {
  production: true,
  dashboardConfig
};
