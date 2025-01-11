import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLight11Component } from './header-light11.component';

describe('HeaderLight11Component', () => {
  let component: HeaderLight11Component;
  let fixture: ComponentFixture<HeaderLight11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLight11Component]
    });
    fixture = TestBed.createComponent(HeaderLight11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
