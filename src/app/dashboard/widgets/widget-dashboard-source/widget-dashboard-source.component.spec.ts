import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDashboardSourceComponent } from './widget-dashboard-source.component';

describe('WidgetDashboardSourceComponent', () => {
  let component: WidgetDashboardSourceComponent;
  let fixture: ComponentFixture<WidgetDashboardSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetDashboardSourceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDashboardSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
