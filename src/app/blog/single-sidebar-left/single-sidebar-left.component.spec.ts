import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSidebarLeftComponent } from './single-sidebar-left.component';

describe('SingleSidebarLeftComponent', () => {
  let component: SingleSidebarLeftComponent;
  let fixture: ComponentFixture<SingleSidebarLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleSidebarLeftComponent]
    });
    fixture = TestBed.createComponent(SingleSidebarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
