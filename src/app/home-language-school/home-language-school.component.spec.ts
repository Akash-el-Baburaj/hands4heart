import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLanguageSchoolComponent } from './home-language-school.component';

describe('HomeLanguageSchoolComponent', () => {
  let component: HomeLanguageSchoolComponent;
  let fixture: ComponentFixture<HomeLanguageSchoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLanguageSchoolComponent]
    });
    fixture = TestBed.createComponent(HomeLanguageSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
