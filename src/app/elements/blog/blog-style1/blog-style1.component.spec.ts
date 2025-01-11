import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStyle1Component } from './blog-style1.component';

describe('BlogStyle1Component', () => {
  let component: BlogStyle1Component;
  let fixture: ComponentFixture<BlogStyle1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogStyle1Component]
    });
    fixture = TestBed.createComponent(BlogStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
