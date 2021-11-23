import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTwoWayBindComponent } from './forms-two-way-bind.component';

describe('FormsTwoWayBindComponent', () => {
  let component: FormsTwoWayBindComponent;
  let fixture: ComponentFixture<FormsTwoWayBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsTwoWayBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTwoWayBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
