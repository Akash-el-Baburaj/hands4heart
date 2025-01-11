import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyleDark6Component } from './header-style-dark6.component';

describe('HeaderStyleDark6Component', () => {
  let component: HeaderStyleDark6Component;
  let fixture: ComponentFixture<HeaderStyleDark6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderStyleDark6Component]
    });
    fixture = TestBed.createComponent(HeaderStyleDark6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
