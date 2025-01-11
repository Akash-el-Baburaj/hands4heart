import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyle4Component } from './header-style4.component';

describe('HeaderStyle4Component', () => {
  let component: HeaderStyle4Component;
  let fixture: ComponentFixture<HeaderStyle4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderStyle4Component]
    });
    fixture = TestBed.createComponent(HeaderStyle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
