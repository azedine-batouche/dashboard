import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetParisComponent } from './widget-paris.component';

describe('WidgetParisComponent', () => {
  let component: WidgetParisComponent;
  let fixture: ComponentFixture<WidgetParisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetParisComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
