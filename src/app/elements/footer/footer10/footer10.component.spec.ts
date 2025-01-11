import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer10Component } from './footer10.component';

describe('Footer10Component', () => {
  let component: Footer10Component;
  let fixture: ComponentFixture<Footer10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Footer10Component]
    });
    fixture = TestBed.createComponent(Footer10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
