import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpeedComponent } from './view-speed.component';

describe('ViewSpeedComponent', () => {
  let component: ViewSpeedComponent;
  let fixture: ComponentFixture<ViewSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
