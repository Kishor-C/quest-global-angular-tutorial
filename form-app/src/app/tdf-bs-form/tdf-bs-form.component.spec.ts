import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfBsFormComponent } from './tdf-bs-form.component';

describe('TdfBsFormComponent', () => {
  let component: TdfBsFormComponent;
  let fixture: ComponentFixture<TdfBsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfBsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfBsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
