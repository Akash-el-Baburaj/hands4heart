import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLight6Component } from './header-light6.component';

describe('HeaderLight6Component', () => {
  let component: HeaderLight6Component;
  let fixture: ComponentFixture<HeaderLight6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLight6Component]
    });
    fixture = TestBed.createComponent(HeaderLight6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
