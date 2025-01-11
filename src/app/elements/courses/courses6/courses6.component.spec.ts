import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courses6Component } from './courses6.component';

describe('Courses6Component', () => {
  let component: Courses6Component;
  let fixture: ComponentFixture<Courses6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Courses6Component]
    });
    fixture = TestBed.createComponent(Courses6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
