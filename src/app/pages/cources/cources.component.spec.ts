import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourcesComponent } from './cources.component';

describe('CourcesComponent', () => {
  let component: CourcesComponent;
  let fixture: ComponentFixture<CourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourcesComponent]
    });
    fixture = TestBed.createComponent(CourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
