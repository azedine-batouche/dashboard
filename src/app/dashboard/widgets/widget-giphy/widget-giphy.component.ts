import { Component, OnInit, Input } from '@angular/core';
import { GiphyImage } from './interfaces/giphy-image';
import { DashboardGridsterItem } from '../../interfaces/dashboard-gridster-item';
import { GiphyDataService } from './giphy-data.service';

@Component({
  selector: 'app-widget-giphy',
  template: `
    <small>&copy; Giphy</small>
    <div *ngIf="!image" class="spinner-border" role="status"></div>
    <h6 *ngIf="!image" class="d-block">&nbsp; Loading...</h6>
    <img *ngIf="image" [src]="image.url" />
  `,
  styleUrls: ['./widget-giphy.component.scss'],
  providers: [GiphyDataService]
})
export class WidgetGiphyComponent implements OnInit {
  public image: GiphyImage;
  private images: GiphyImage[];
  private timer: any = null;

  private currentImageIndex = 0;

  @Input() data: DashboardGridsterItem;

  constructor(private giphyDataService: GiphyDataService) {}

  private getImages() {
    this.giphyDataService.getImages(this.data.widget.params.q).subscribe(images => {
      this.images = images;

      if (this.timer !== null) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => this.setImage(), 15000);
    });
  }
  private setImage(): void {
    this.currentImageIndex = this.currentImageIndex + 1 > this.images.length ? 0 : this.currentImageIndex + 1;
    this.image = this.images[this.currentImageIndex];
    this.preLoadImage();
  }

  private preLoadImage(): void {
    const nextImageIndex = this.currentImageIndex + 1 > this.images.length ? 0 : this.currentImageIndex + 1;
    const image = new Image();
    if (this.images[nextImageIndex].url) {
      image.src = this.images[nextImageIndex].url;
    }
  }

  ngOnInit() {
    this.getImages();
  }
}
