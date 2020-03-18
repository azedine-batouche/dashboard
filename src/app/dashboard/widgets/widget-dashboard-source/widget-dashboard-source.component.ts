import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widget-dashboard-source',
  templateUrl: './widget-dashboard-source.component.html',
  styleUrls: ['./widget-dashboard-source.component.scss']
})
export class WidgetDashboardSourceComponent implements OnInit {
  protected test= 'https://github.com/batouche-dev/dashboard'
  constructor(private router: Router) {}

  download(){
    this.router.navigateByUrl('https://codeload.github.com/batouche-dev/dashboard/zip/1.0.0');
  }
  ngOnInit() {}
}
