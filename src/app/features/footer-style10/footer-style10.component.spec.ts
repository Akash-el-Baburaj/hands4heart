import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStyle10Component } from './footer-style10.component';

describe('FooterStyle10Component', () => {
  let component: FooterStyle10Component;
  let fixture: ComponentFixture<FooterStyle10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterStyle10Component]
    });
    fixture = TestBed.createComponent(FooterStyle10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
