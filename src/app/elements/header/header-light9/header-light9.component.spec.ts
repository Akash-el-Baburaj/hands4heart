import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLight9Component } from './header-light9.component';

describe('HeaderLight9Component', () => {
  let component: HeaderLight9Component;
  let fixture: ComponentFixture<HeaderLight9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLight9Component]
    });
    fixture = TestBed.createComponent(HeaderLight9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
