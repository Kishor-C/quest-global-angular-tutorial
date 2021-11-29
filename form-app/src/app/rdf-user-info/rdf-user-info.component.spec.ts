import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdfUserInfoComponent } from './rdf-user-info.component';

describe('RdfUserInfoComponent', () => {
  let component: RdfUserInfoComponent;
  let fixture: ComponentFixture<RdfUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdfUserInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdfUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
