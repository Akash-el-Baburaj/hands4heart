import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyle5Component } from './header-style5.component';

describe('HeaderStyle5Component', () => {
  let component: HeaderStyle5Component;
  let fixture: ComponentFixture<HeaderStyle5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderStyle5Component]
    });
    fixture = TestBed.createComponent(HeaderStyle5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
