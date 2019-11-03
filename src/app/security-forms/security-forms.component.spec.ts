import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityFormsComponent } from './security-forms.component';

describe('SecurityFormsComponent', () => {
  let component: SecurityFormsComponent;
  let fixture: ComponentFixture<SecurityFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
