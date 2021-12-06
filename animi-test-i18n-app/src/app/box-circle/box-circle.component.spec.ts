import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCircleComponent } from './box-circle.component';

describe('BoxCircleComponent', () => {
  let component: BoxCircleComponent;
  let fixture: ComponentFixture<BoxCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
