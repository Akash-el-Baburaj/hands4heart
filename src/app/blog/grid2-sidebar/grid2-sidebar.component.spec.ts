import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid2SidebarComponent } from './grid2-sidebar.component';

describe('Grid2SidebarComponent', () => {
  let component: Grid2SidebarComponent;
  let fixture: ComponentFixture<Grid2SidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grid2SidebarComponent]
    });
    fixture = TestBed.createComponent(Grid2SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
