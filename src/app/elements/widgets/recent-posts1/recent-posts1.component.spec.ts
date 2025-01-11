import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPosts1Component } from './recent-posts1.component';

describe('RecentPosts1Component', () => {
  let component: RecentPosts1Component;
  let fixture: ComponentFixture<RecentPosts1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentPosts1Component]
    });
    fixture = TestBed.createComponent(RecentPosts1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
