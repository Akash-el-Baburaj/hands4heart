import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStyle9Component } from './footer-style9.component';

describe('FooterStyle9Component', () => {
  let component: FooterStyle9Component;
  let fixture: ComponentFixture<FooterStyle9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterStyle9Component]
    });
    fixture = TestBed.createComponent(FooterStyle9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
