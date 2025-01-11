import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationForm1Component } from './registration-form1.component';

describe('RegistrationForm1Component', () => {
  let component: RegistrationForm1Component;
  let fixture: ComponentFixture<RegistrationForm1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationForm1Component]
    });
    fixture = TestBed.createComponent(RegistrationForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
