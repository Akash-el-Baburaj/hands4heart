import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeImageComponent } from './large-image.component';

describe('LargeImageComponent', () => {
  let component: LargeImageComponent;
  let fixture: ComponentFixture<LargeImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LargeImageComponent]
    });
    fixture = TestBed.createComponent(LargeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
