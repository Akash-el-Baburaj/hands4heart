import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLight2Component } from './header-light2.component';

describe('HeaderLight2Component', () => {
  let component: HeaderLight2Component;
  let fixture: ComponentFixture<HeaderLight2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLight2Component]
    });
    fixture = TestBed.createComponent(HeaderLight2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
