import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'cpr-certificate',
  templateUrl: './cpr-certificate.component.html',
  styleUrls: ['./cpr-certificate.component.css']
})
export class CprCertificateComponent implements OnChanges {

  @Input() Data: any | null = null;
  @Input() qrData: any | null = null;
  @Input() certificateID: any | null = null;
  @Output() modalClose = new EventEmitter<any>(); 
  
  @ViewChild('pdfContent', { static: false }) pdfContent!: ElementRef;

  
  userProfile: any | null = null;
  inputData: any | any = null
  modalRef!: NgbModalRef | null;
  cert_ID: any | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['Data']) {
      this.userProfile = this.Data;
    }

    if (changes['qrData']) {
      this.inputData = this.qrData;
    }

    if (changes['certificateID']) {
      this.cert_ID = this.certificateID;
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

  isLoading = false
  certificate_displays = false

  downloadAsPDF() {
    this.isLoading = true;   

    const element = document.getElementById('pdfContent');
    if (!element) {
        console.error("Element with ID 'pdfContent' not found");
        this.isLoading = false;
        return;
    }
    element.classList.remove('d-none');

    const originalDisplay = element.style.display;
    element.style.display = 'block';  

    html2canvas(element, { scale: 2 }).then((canvas) => {
        element.style.display = originalDisplay;  

        const imgData = canvas.toDataURL('image/png');

        const pxToMm = 0.264583; 
        const imgWidthMm = canvas.width * pxToMm;  
        const imgHeightMm = canvas.height * pxToMm;

        const pdf = new jsPDF({
            orientation: imgWidthMm > imgHeightMm ? 'landscape' : 'portrait',
            unit: 'mm',
            format: [imgWidthMm, imgHeightMm]
        });


        pdf.addImage(imgData, 'PNG', 0, 0, imgWidthMm, imgHeightMm);
        pdf.save('certificate.pdf');

        element.style.display = originalDisplay;  

        this.isLoading = false; 
        this.modalClose.emit();
    }).catch(error => {
        console.error('Error generating PDF:', error);

        // Restore original display property even if error occurs
        element.style.display = originalDisplay;  

        this.isLoading = false; // Stop loader on error
        this.modalClose.emit();
    });
}
}
