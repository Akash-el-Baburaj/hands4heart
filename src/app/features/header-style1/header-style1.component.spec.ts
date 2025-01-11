import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyle1Component } from './header-style1.component';

describe('HeaderStyle1Component', () => {
  let component: HeaderStyle1Component;
  let fixture: ComponentFixture<HeaderStyle1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderStyle1Component]
    });
    fixture = TestBed.createComponent(HeaderStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
