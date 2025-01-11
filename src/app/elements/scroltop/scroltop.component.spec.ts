import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScroltopComponent } from './scroltop.component';

describe('ScroltopComponent', () => {
  let component: ScroltopComponent;
  let fixture: ComponentFixture<ScroltopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScroltopComponent]
    });
    fixture = TestBed.createComponent(ScroltopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
