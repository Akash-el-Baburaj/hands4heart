import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content2Component } from './content2.component';

describe('Content2Component', () => {
  let component: Content2Component;
  let fixture: ComponentFixture<Content2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Content2Component]
    });
    fixture = TestBed.createComponent(Content2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
