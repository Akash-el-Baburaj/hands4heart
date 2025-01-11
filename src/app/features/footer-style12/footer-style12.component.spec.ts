import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStyle12Component } from './footer-style12.component';

describe('FooterStyle12Component', () => {
  let component: FooterStyle12Component;
  let fixture: ComponentFixture<FooterStyle12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterStyle12Component]
    });
    fixture = TestBed.createComponent(FooterStyle12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
