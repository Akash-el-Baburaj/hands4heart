import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newsletter3Component } from './newsletter3.component';

describe('Newsletter3Component', () => {
  let component: Newsletter3Component;
  let fixture: ComponentFixture<Newsletter3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Newsletter3Component]
    });
    fixture = TestBed.createComponent(Newsletter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
