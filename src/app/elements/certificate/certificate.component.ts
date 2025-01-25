import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnChanges {

  @Input() Data: any | null = null;

  userProfile: any | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['Data']) {
      this.userProfile = this.Data
    }
  }

}
