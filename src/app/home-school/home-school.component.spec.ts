import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSchoolComponent } from './home-school.component';

describe('HomeSchoolComponent', () => {
  let component: HomeSchoolComponent;
  let fixture: ComponentFixture<HomeSchoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSchoolComponent]
    });
    fixture = TestBed.createComponent(HomeSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
