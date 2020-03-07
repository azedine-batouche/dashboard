import { Component, OnInit, Input } from '@angular/core';
import { DashboardGridsterItem } from '../../interfaces/dashboard-gridster-item';
import { ChartType, ChartDataSets, Chart } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-hello-world',
  template: `
    <div class="d-block text-center py-2">
      <h3>LANGUAGES</h3>
    </div>
    <div>
      <canvas id="bb">{{ chart }}</canvas>
    </div>
    <div class="ctn-update text-center">
      <p class="text-muted">- il y a 18 min-</p>
    </div>
  `,
  styles: [':host{height:100%; width:100%}']
})
export class HelloWorldComponent implements OnInit {
  chart: any;

  @Input() data: DashboardGridsterItem;

  constructor() {}

  ngOnInit() {
    this.chart = new Chart('bb', {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: 'NB SUPPORTS',
            data: [80, 20],
            backgroundColor: ['rgba(19, 209, 25, 1)', 'rgba(19, 209, 25, 0.4)'],
            borderColor: ['rgba(19, 209, 25, 1)', 'rgba(19, 209, 25, 0.4)'],
            borderWidth: 1
          }
        ]
      },
      options: {
        rotation: 0.75 * Math.PI,
        circumference: 1.5 * Math.PI
      }
    });
  }
}
