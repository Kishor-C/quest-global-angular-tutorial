import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBind2Component } from './event-bind2.component';

describe('EventBind2Component', () => {
  let component: EventBind2Component;
  let fixture: ComponentFixture<EventBind2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBind2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBind2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
