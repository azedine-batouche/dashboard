import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DashboardGridsterItem } from './interfaces/dashboard-gridster-item';
import { WidgetHostDirective } from './widget-host.directive';
import { WidgetGiphyComponent } from './widgets/widget-giphy/widget-giphy.component';

@Component({
  selector: 'app-widget-container',
  template: `
    <ng-template [appWidgetHost]="data"></ng-template>
  `,
  styles: [':host{height:100%; width:100%;  display:flex; align-items:center}']
})
export class WidgetContainerComponent implements OnInit {
  componentFactory;
  componentRef;
  @Input()
  data: DashboardGridsterItem;

  @ViewChild(WidgetHostDirective, { static: true })
  widgetHostDirective: WidgetHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  private injectComponent(): void {
    if (this.data.widget.component === null) {
      return;
    }

    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.widget.component);
    this.componentRef = this.widgetHostDirective.viewContainerRef.createComponent(this.componentFactory);
    this.componentRef.instance.data = this.data;
  }

  private setComponent(component: string) {

    if (component === 'WidgetGiphyComponent') {


      return WidgetGiphyComponent;
    }
    return;
  }

  ngOnInit() {
    this.injectComponent();
  }
  private _destroyComponent(): void {
    if (this.componentRef) {
      this.componentRef = null;
    }
  }
}
