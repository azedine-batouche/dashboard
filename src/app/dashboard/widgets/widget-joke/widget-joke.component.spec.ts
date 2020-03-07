import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetJokeComponent } from './widget-joke.component';

describe('WidgetJokeComponent', () => {
  let component: WidgetJokeComponent;
  let fixture: ComponentFixture<WidgetJokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetJokeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
