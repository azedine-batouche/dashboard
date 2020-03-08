import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { DashboardGridsterItem } from '../../interfaces/dashboard-gridster-item';

@Component({
  selector: 'app-widget-bitbucket',
  templateUrl: './widget-bitbucket.component.html',
  styleUrls: ['./widget-bitbucket.component.scss']
})
export class WidgetBitbucketComponent implements OnInit {
  charts: any;

  nbSupport = 25;



  constructor() {}

  @Input() data: DashboardGridsterItem;

  ngOnInit() {
    this.charts = new Chart('bitbucketCanvas', {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: 'NB SUPPORTS',
            data: [90, 19],
            backgroundColor: ['rgba(144, 192,248, 1)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(144, 192,248, 1)', 'rgba(54, 162, 235, 1)'],
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
