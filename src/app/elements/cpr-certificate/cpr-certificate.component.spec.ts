import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CprCertificateComponent } from './cpr-certificate.component';

describe('CprCertificateComponent', () => {
  let component: CprCertificateComponent;
  let fixture: ComponentFixture<CprCertificateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CprCertificateComponent]
    });
    fixture = TestBed.createComponent(CprCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
