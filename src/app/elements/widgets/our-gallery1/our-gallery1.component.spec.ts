import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurGallery1Component } from './our-gallery1.component';

describe('OurGallery1Component', () => {
  let component: OurGallery1Component;
  let fixture: ComponentFixture<OurGallery1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurGallery1Component]
    });
    fixture = TestBed.createComponent(OurGallery1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
