import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEvautionListComponent } from './test-evaution-list.component';

describe('TestEvautionListComponent', () => {
  let component: TestEvautionListComponent;
  let fixture: ComponentFixture<TestEvautionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestEvautionListComponent]
    });
    fixture = TestBed.createComponent(TestEvautionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
