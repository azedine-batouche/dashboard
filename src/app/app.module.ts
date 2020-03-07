import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutesModule } from './app.routes';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    DashboardModule,
    AppRoutesModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
