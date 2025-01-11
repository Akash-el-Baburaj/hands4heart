import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCollegeComponent } from './home-college.component';

describe('HomeCollegeComponent', () => {
  let component: HomeCollegeComponent;
  let fixture: ComponentFixture<HomeCollegeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCollegeComponent]
    });
    fixture = TestBed.createComponent(HomeCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
