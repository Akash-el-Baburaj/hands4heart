import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightgalleryComponent } from './lightgallery.component';

describe('LightgalleryComponent', () => {
  let component: LightgalleryComponent;
  let fixture: ComponentFixture<LightgalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightgalleryComponent]
    });
    fixture = TestBed.createComponent(LightgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
