import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLight1Component } from './header-light1.component';

describe('HeaderLight1Component', () => {
  let component: HeaderLight1Component;
  let fixture: ComponentFixture<HeaderLight1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLight1Component]
    });
    fixture = TestBed.createComponent(HeaderLight1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
