import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery1Component } from './gallery1.component';

describe('Gallery1Component', () => {
  let component: Gallery1Component;
  let fixture: ComponentFixture<Gallery1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gallery1Component]
    });
    fixture = TestBed.createComponent(Gallery1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
