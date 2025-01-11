import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToAction1Component } from './call-to-action1.component';

describe('CallToAction1Component', () => {
  let component: CallToAction1Component;
  let fixture: ComponentFixture<CallToAction1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallToAction1Component]
    });
    fixture = TestBed.createComponent(CallToAction1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
