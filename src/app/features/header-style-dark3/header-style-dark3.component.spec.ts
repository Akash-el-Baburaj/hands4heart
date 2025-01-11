import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyleDark3Component } from './header-style-dark3.component';

describe('HeaderStyleDark3Component', () => {
  let component: HeaderStyleDark3Component;
  let fixture: ComponentFixture<HeaderStyleDark3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderStyleDark3Component]
    });
    fixture = TestBed.createComponent(HeaderStyleDark3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
