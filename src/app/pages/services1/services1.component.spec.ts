import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Services1Component } from './services1.component';

describe('Services1Component', () => {
  let component: Services1Component;
  let fixture: ComponentFixture<Services1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Services1Component]
    });
    fixture = TestBed.createComponent(Services1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
