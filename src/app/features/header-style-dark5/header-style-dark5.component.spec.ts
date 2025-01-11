import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyleDark5Component } from './header-style-dark5.component';

describe('HeaderStyleDark5Component', () => {
  let component: HeaderStyleDark5Component;
  let fixture: ComponentFixture<HeaderStyleDark5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderStyleDark5Component]
    });
    fixture = TestBed.createComponent(HeaderStyleDark5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
