import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourcesDetailsComponent } from './cources-details.component';

describe('CourcesDetailsComponent', () => {
  let component: CourcesDetailsComponent;
  let fixture: ComponentFixture<CourcesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourcesDetailsComponent]
    });
    fixture = TestBed.createComponent(CourcesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
