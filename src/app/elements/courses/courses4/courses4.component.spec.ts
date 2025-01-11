import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courses4Component } from './courses4.component';

describe('Courses4Component', () => {
  let component: Courses4Component;
  let fixture: ComponentFixture<Courses4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Courses4Component]
    });
    fixture = TestBed.createComponent(Courses4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
