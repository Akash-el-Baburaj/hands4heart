import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDark4Component } from './header-dark4.component';

describe('HeaderDark4Component', () => {
  let component: HeaderDark4Component;
  let fixture: ComponentFixture<HeaderDark4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderDark4Component]
    });
    fixture = TestBed.createComponent(HeaderDark4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
