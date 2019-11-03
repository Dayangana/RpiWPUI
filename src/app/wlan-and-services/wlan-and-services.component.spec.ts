import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WlanAndServicesComponent } from './wlan-and-services.component';

describe('WlanAndServicesComponent', () => {
  let component: WlanAndServicesComponent;
  let fixture: ComponentFixture<WlanAndServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WlanAndServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WlanAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
