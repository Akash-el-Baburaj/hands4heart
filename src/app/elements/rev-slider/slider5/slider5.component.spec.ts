import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slider5Component } from './slider5.component';

describe('Slider5Component', () => {
  let component: Slider5Component;
  let fixture: ComponentFixture<Slider5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slider5Component]
    });
    fixture = TestBed.createComponent(Slider5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
