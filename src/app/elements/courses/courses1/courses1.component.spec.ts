import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courses1Component } from './courses1.component';

describe('Courses1Component', () => {
  let component: Courses1Component;
  let fixture: ComponentFixture<Courses1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Courses1Component]
    });
    fixture = TestBed.createComponent(Courses1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
