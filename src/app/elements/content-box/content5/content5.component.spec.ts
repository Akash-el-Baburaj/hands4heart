import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content5Component } from './content5.component';

describe('Content5Component', () => {
  let component: Content5Component;
  let fixture: ComponentFixture<Content5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Content5Component]
    });
    fixture = TestBed.createComponent(Content5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
