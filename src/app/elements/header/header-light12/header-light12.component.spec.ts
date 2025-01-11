import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLight12Component } from './header-light12.component';

describe('HeaderLight12Component', () => {
  let component: HeaderLight12Component;
  let fixture: ComponentFixture<HeaderLight12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLight12Component]
    });
    fixture = TestBed.createComponent(HeaderLight12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
