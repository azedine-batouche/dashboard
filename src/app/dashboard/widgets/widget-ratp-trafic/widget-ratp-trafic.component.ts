import { Component, OnInit, ElementRef, SimpleChanges } from '@angular/core';
import { DataTraficRatpService } from './data-trafic-ratp.service';
import { HttpError } from '../../interfaces/http-error';
import { RatpTraffic } from './interfaces/ratp-traffic';

@Component({
  selector: 'app-widget-ratp-trafic',
  templateUrl: './widget-ratp-trafic.component.html',
  styleUrls: ['./widget-ratp-trafic.component.scss'],
  providers: [DataTraficRatpService]
})
export class WidgetRatpTraficComponent implements OnInit {
  private metroDefine: string = 'M';
  private rerDefine: string = 'RER';
  protected error: HttpError;
  protected firstTrafficElt: RatpTraffic;
  protected metroTraffic: RatpTraffic[];
  private rerTraffic: RatpTraffic[];
  private alertBadge: boolean = false;
  private eltRef: ElementRef;
  defaultTraficMessage: string = "Trafic normal sur l'ensemble de la ligne.";

  constructor(private ratpTrafficService: DataTraficRatpService) {}

  private getTraffic() {
    this.ratpTrafficService.getRatpTraffic().subscribe(
      dataTraffic => this.selectDataTraffic(dataTraffic),
      error => {
        (this.error = error['result']), console.log('ratp error: ' + JSON.stringify(error));
      }
    );
  }

  private selectDataTraffic(dataTraffic: any) {
    this.metroTraffic = dataTraffic['result']['rers'];
    this.metroTraffic = this.filterData(this.metroTraffic);
    dataTraffic['result']['metros'].forEach(metro => {
      let metroTag = metro;
      metroTag.type = this.metroDefine;
      metroTag.badge = this.alertBadgeDone(metroTag);
      this.metroTraffic.push(metroTag);
    });
    this.firstTrafficElt = this.metroTraffic[0];
    this.metroTraffic.shift();
  }

  private filterData(data: any): RatpTraffic[] {
    data.forEach(rer => {
      let rerTag = rer;
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
    let carrousel = document.getElementById('carousel');
    if (carrousel) {
      carrousel.scrollIntoView(false);
    }
  }

  ngOnInit() {
    this.getTraffic();
  }

  ngAfterContentChecked(): void {
    this.scrollCaroussel();
  }
}
