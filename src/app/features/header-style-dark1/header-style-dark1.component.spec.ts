import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyleDark1Component } from './header-style-dark1.component';

describe('HeaderStyleDark1Component', () => {
  let component: HeaderStyleDark1Component;
  let fixture: ComponentFixture<HeaderStyleDark1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderStyleDark1Component]
    });
    fixture = TestBed.createComponent(HeaderStyleDark1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
