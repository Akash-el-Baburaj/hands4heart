import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTable1Component } from './price-table1.component';

describe('PriceTable1Component', () => {
  let component: PriceTable1Component;
  let fixture: ComponentFixture<PriceTable1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceTable1Component]
    });
    fixture = TestBed.createComponent(PriceTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
