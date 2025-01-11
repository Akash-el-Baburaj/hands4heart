import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBox4Component } from './icon-box4.component';

describe('IconBox4Component', () => {
  let component: IconBox4Component;
  let fixture: ComponentFixture<IconBox4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconBox4Component]
    });
    fixture = TestBed.createComponent(IconBox4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
