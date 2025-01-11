import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBox2Component } from './icon-box2.component';

describe('IconBox2Component', () => {
  let component: IconBox2Component;
  let fixture: ComponentFixture<IconBox2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconBox2Component]
    });
    fixture = TestBed.createComponent(IconBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
