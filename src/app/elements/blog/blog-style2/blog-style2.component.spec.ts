import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStyle2Component } from './blog-style2.component';

describe('BlogStyle2Component', () => {
  let component: BlogStyle2Component;
  let fixture: ComponentFixture<BlogStyle2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogStyle2Component]
    });
    fixture = TestBed.createComponent(BlogStyle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
