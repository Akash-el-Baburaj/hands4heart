import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersProfileComponent } from './teachers-profile.component';

describe('TeachersProfileComponent', () => {
  let component: TeachersProfileComponent;
  let fixture: ComponentFixture<TeachersProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersProfileComponent]
    });
    fixture = TestBed.createComponent(TeachersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
