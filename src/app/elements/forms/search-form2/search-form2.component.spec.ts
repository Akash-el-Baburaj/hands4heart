import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForm2Component } from './search-form2.component';

describe('SearchForm2Component', () => {
  let component: SearchForm2Component;
  let fixture: ComponentFixture<SearchForm2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchForm2Component]
    });
    fixture = TestBed.createComponent(SearchForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
