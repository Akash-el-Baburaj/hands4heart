import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimonial3Component } from './testimonial3.component';

describe('Testimonial3Component', () => {
  let component: Testimonial3Component;
  let fixture: ComponentFixture<Testimonial3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Testimonial3Component]
    });
    fixture = TestBed.createComponent(Testimonial3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
