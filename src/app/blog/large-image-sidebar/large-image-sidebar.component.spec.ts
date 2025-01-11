import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeImageSidebarComponent } from './large-image-sidebar.component';

describe('LargeImageSidebarComponent', () => {
  let component: LargeImageSidebarComponent;
  let fixture: ComponentFixture<LargeImageSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LargeImageSidebarComponent]
    });
    fixture = TestBed.createComponent(LargeImageSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
