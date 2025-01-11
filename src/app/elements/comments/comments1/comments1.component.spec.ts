import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comments1Component } from './comments1.component';

describe('Comments1Component', () => {
  let component: Comments1Component;
  let fixture: ComponentFixture<Comments1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Comments1Component]
    });
    fixture = TestBed.createComponent(Comments1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
