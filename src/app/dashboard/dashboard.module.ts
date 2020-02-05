import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutesModule } from './dashboard.routes';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutesModule]
})
export class DashboardModule {}
