import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLight4Component } from './header-light4.component';

describe('HeaderLight4Component', () => {
  let component: HeaderLight4Component;
  let fixture: ComponentFixture<HeaderLight4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLight4Component]
    });
    fixture = TestBed.createComponent(HeaderLight4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
