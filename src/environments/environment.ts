import { DashboardConfig } from 'src/app/dashboard/interfaces/dashboard-config';

const dashboardConfig: DashboardConfig = {
  items: [
    { cols: 1, rows: 2, y: 0, x: 0, widget: { icon: null, class: 'bg-primary' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: 'bg-success' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: 'bg-warning' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: null } },
    { cols: 2, rows: 1, y: 0, x: 0, widget: { icon: null, class: 'bg-light text-dark' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: 'bg-white text-dark' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: 'bg-secondary' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: 'bg-danger' } }
  ]
};

export const environment = {
  production: false,
  dashboardConfig
};
