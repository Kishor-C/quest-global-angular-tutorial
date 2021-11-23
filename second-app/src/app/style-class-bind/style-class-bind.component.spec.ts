import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleClassBindComponent } from './style-class-bind.component';

describe('StyleClassBindComponent', () => {
  let component: StyleClassBindComponent;
  let fixture: ComponentFixture<StyleClassBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleClassBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleClassBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
