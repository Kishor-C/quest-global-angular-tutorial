import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoIfComponent } from './demo-if.component';

describe('DemoIfComponent', () => {
  let component: DemoIfComponent;
  let fixture: ComponentFixture<DemoIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
