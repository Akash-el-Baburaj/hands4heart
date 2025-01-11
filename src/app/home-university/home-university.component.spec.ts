import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUniversityComponent } from './home-university.component';

describe('HomeUniversityComponent', () => {
  let component: HomeUniversityComponent;
  let fixture: ComponentFixture<HomeUniversityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeUniversityComponent]
    });
    fixture = TestBed.createComponent(HomeUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
