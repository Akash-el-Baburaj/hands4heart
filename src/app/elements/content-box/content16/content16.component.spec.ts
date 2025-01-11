import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content16Component } from './content16.component';

describe('Content16Component', () => {
  let component: Content16Component;
  let fixture: ComponentFixture<Content16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Content16Component]
    });
    fixture = TestBed.createComponent(Content16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
