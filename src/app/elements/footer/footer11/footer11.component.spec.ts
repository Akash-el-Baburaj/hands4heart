import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer11Component } from './footer11.component';

describe('Footer11Component', () => {
  let component: Footer11Component;
  let fixture: ComponentFixture<Footer11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Footer11Component]
    });
    fixture = TestBed.createComponent(Footer11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
