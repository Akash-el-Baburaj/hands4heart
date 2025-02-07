import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnChanges {

  @Input() Data: any | null = null;
  @Input() qrData: any | null = null;

  userProfile: any | null = null;
  inputData: any | any = null

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['Data']) {
      console.log('this.Data',this.Data)
      this.userProfile = this.Data
      console.log('this.userProfile',this.userProfile)

    }

    if (changes['qrData']) {
      this.inputData = this.qrData
    }
  }

}
