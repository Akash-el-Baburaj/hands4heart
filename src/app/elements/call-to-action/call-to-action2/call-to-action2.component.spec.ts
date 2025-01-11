import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToAction2Component } from './call-to-action2.component';

describe('CallToAction2Component', () => {
  let component: CallToAction2Component;
  let fixture: ComponentFixture<CallToAction2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallToAction2Component]
    });
    fixture = TestBed.createComponent(CallToAction2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
