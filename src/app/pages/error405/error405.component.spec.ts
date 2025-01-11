import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error405Component } from './error405.component';

describe('Error405Component', () => {
  let component: Error405Component;
  let fixture: ComponentFixture<Error405Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Error405Component]
    });
    fixture = TestBed.createComponent(Error405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
