import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryGrid2Component } from './gallery-grid2.component';

describe('GalleryGrid2Component', () => {
  let component: GalleryGrid2Component;
  let fixture: ComponentFixture<GalleryGrid2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryGrid2Component]
    });
    fixture = TestBed.createComponent(GalleryGrid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
