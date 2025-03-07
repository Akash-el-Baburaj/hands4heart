import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'cpr-certificate',
  templateUrl: './cpr-certificate.component.html',
  styleUrls: ['./cpr-certificate.component.css']
})
export class CprCertificateComponent implements OnChanges {

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
      console.log('data qr = ', this.inputData)
    }
  }

  getTitleWithUsername(name: string, gender: string) {
    switch(gender) {
      case 'Male':
        return `Mr. ${name}`;
        // break;
      case 'Female':
        return `Ms. ${name}`;
      case 'Other':
        return name;
      default:
        return name;
    }
  }

}
