import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimonial2Component } from './testimonial2.component';

describe('Testimonial2Component', () => {
  let component: Testimonial2Component;
  let fixture: ComponentFixture<Testimonial2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Testimonial2Component]
    });
    fixture = TestBed.createComponent(Testimonial2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
