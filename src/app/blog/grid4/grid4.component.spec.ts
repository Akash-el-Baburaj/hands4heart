import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid4Component } from './grid4.component';

describe('Grid4Component', () => {
  let component: Grid4Component;
  let fixture: ComponentFixture<Grid4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grid4Component]
    });
    fixture = TestBed.createComponent(Grid4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
