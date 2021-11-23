import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDataBindComponent } from './two-data-bind.component';

describe('TwoDataBindComponent', () => {
  let component: TwoDataBindComponent;
  let fixture: ComponentFixture<TwoDataBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoDataBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDataBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
