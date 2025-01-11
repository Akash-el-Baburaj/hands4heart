import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery6Component } from './gallery6.component';

describe('Gallery6Component', () => {
  let component: Gallery6Component;
  let fixture: ComponentFixture<Gallery6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gallery6Component]
    });
    fixture = TestBed.createComponent(Gallery6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
