import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courses5Component } from './courses5.component';

describe('Courses5Component', () => {
  let component: Courses5Component;
  let fixture: ComponentFixture<Courses5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Courses5Component]
    });
    fixture = TestBed.createComponent(Courses5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
