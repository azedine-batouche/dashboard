import { Component, OnInit } from '@angular/core';
import { DataParisService } from './data-paris.service';
import { HttpError } from '../../interfaces/http-error';

@Component({
  selector: 'app-widget-paris',
  templateUrl: './widget-paris.component.html',
  styleUrls: ['./widget-paris.component.scss'],
  providers: [DataParisService]
})
export class WidgetParisComponent implements OnInit {
  protected error: HttpError;
  private EventParis: any;

  constructor(private dataParisService: DataParisService) {}

  private getParisEvent() {
    this.dataParisService.getParisEvent().subscribe(
      events => {
        (this.EventParis = events), console.log('data paris: ' + JSON.stringify(this.EventParis));
      },
      error => (this.error = error)
    );
  }

  ngOnInit() {
    this.getParisEvent();
  }
}
