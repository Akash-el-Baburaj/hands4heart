import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagList1Component } from './tag-list1.component';

describe('TagList1Component', () => {
  let component: TagList1Component;
  let fixture: ComponentFixture<TagList1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagList1Component]
    });
    fixture = TestBed.createComponent(TagList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
