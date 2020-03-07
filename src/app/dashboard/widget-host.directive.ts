import { Directive, Input, ViewContainerRef } from '@angular/core';
import { DashboardGridsterItem } from './interfaces/dashboard-gridster-item';

@Directive({
  selector: '[appWidgetHost]'
})
export class WidgetHostDirective {
  private data: DashboardGridsterItem;

  @Input('appWidgetHost') set appWidgetHost(data: DashboardGridsterItem) {
    this.data = data;
  }

  constructor(public viewContainerRef: ViewContainerRef) {}
}
