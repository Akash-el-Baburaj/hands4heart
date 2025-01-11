import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfImageSidebarComponent } from './half-image-sidebar.component';

describe('HalfImageSidebarComponent', () => {
  let component: HalfImageSidebarComponent;
  let fixture: ComponentFixture<HalfImageSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HalfImageSidebarComponent]
    });
    fixture = TestBed.createComponent(HalfImageSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
