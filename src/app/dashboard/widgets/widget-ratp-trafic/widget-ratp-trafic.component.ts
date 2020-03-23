import { Component, OnInit, ElementRef, SimpleChanges } from '@angular/core';
import { DataTraficRatpService } from './data-trafic-ratp.service';
import { HttpError } from '../../interfaces/http-error';
import { RatpTraffic } from './interfaces/ratp-traffic';

import { RatpField } from './interfaces/ratp-field.enum';

@Component({
  selector: 'app-widget-ratp-trafic',
  templateUrl: './widget-ratp-trafic.component.html',
  styleUrls: ['./widget-ratp-trafic.component.scss'],
  providers: [DataTraficRatpService]
})
export class WidgetRatpTraficComponent implements OnInit {
  private metroDefine = 'M';
  private rerDefine = 'RER';

  protected error: HttpError;
  protected firstTrafficElt: RatpTraffic;
  protected metroTraffic: RatpTraffic[];
  private rerTraffic: RatpTraffic[];

  private alertBadge = false;
  private eltRef: ElementRef;
  defaultTraficMessage = "Trafic normal sur l'ensemble de la ligne.";

  constructor(private ratpTrafficService: DataTraficRatpService) {}

  private getTraffic() {
    this.ratpTrafficService.getRatpTraffic().subscribe(
      dataTraffic => this.selectDataTraffic(dataTraffic),
      error => {
        (this.error = error[RatpField.result]), console.log('ratp error: ' + JSON.stringify(error));
      }
    );
  }

  private selectDataTraffic(dataTraffic: any) {
    this.metroTraffic = dataTraffic[RatpField.result][RatpField.rers];
    this.metroTraffic = this.filterData(this.metroTraffic);
    dataTraffic[RatpField.result][RatpField.metros].forEach(metro => {
      const metroTag = metro;
      metroTag.type = this.metroDefine;
      metroTag.badge = this.alertBadgeDone(metroTag);
      this.metroTraffic.push(metroTag);
    });
    this.firstTrafficElt = this.metroTraffic[0];
    this.metroTraffic.shift();
  }

  private filterData(data: any): RatpTraffic[] {
    data.forEach(rer => {
      const rerTag = rer;

      rerTag.type = this.rerDefine;
      rerTag.badge = this.alertBadgeDone(rerTag);
    });
    return data;
  }

  private alertBadgeDone(data: any): boolean {
    if (data.message === this.defaultTraficMessage) {
      return true;
    }
    return false;
  }
  private scrollCaroussel() {
    const carrousel = document.getElementById('carousel');

    if (carrousel) {
      carrousel.scrollIntoView(false);
    }
  }

  ngOnInit() {
    this.getTraffic();

    this.scrollCaroussel();
  }
}
