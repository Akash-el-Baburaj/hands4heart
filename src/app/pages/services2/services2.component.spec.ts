import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Services2Component } from './services2.component';

describe('Services2Component', () => {
  let component: Services2Component;
  let fixture: ComponentFixture<Services2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Services2Component]
    });
    fixture = TestBed.createComponent(Services2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
