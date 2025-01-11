import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content6Component } from './content6.component';

describe('Content6Component', () => {
  let component: Content6Component;
  let fixture: ComponentFixture<Content6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Content6Component]
    });
    fixture = TestBed.createComponent(Content6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
