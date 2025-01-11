import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStyle7Component } from './footer-style7.component';

describe('FooterStyle7Component', () => {
  let component: FooterStyle7Component;
  let fixture: ComponentFixture<FooterStyle7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterStyle7Component]
    });
    fixture = TestBed.createComponent(FooterStyle7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
