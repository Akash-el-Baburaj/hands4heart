import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentForm1Component } from './comment-form1.component';

describe('CommentForm1Component', () => {
  let component: CommentForm1Component;
  let fixture: ComponentFixture<CommentForm1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentForm1Component]
    });
    fixture = TestBed.createComponent(CommentForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
