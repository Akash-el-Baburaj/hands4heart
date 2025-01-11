import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStyleImageComponent } from './blog-style-image.component';

describe('BlogStyleImageComponent', () => {
  let component: BlogStyleImageComponent;
  let fixture: ComponentFixture<BlogStyleImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogStyleImageComponent]
    });
    fixture = TestBed.createComponent(BlogStyleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
