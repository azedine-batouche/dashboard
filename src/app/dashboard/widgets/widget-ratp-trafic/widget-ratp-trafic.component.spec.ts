import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetRatpTraficComponent } from './widget-ratp-trafic.component';

describe('WidgetRatpTraficComponent', () => {
  let component: WidgetRatpTraficComponent;
  let fixture: ComponentFixture<WidgetRatpTraficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetRatpTraficComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetRatpTraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
