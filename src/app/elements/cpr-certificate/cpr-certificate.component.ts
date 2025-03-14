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
  @Output() modalClose = new EventEmitter<any>(); 
  
  @ViewChild('pdfContent', { static: false }) pdfContent!: ElementRef;

  
  userProfile: any | null = null;
  inputData: any | any = null
  modalRef!: NgbModalRef | null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['Data']) {
      this.userProfile = this.Data
    }

    if (changes['qrData']) {
      this.inputData = this.qrData
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

  

  // downloadAsPDF() {
  //   console.log('pdfContent => ', this.pdfContent)
  //   console.log('pdfContent.nativeElement => ', this.pdfContent.nativeElement)
  //   const element = this.pdfContent.nativeElement;

  //   html2canvas(element).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF('p', 'mm', 'a4');

  //     const imgWidth = 210; // A4 width in mm
  //     const pageHeight = 297; // A4 height in mm
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     let heightLeft = imgHeight;
  //     let position = 0;

  //     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;

  //     while (heightLeft > 0) {
  //       position = heightLeft - imgHeight;
  //       pdf.addPage();
  //       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight;
  //     }

  //     pdf.save('certificate.pdf');
  //     this.modalClose.emit();
  //   });
  // }


  // downloadAsPDF() {
  //   console.log('this.pdfContent == ', this.pdfContent)
  //   console.log('this.pdfContent.nativeElement == ', this.pdfContent.nativeElement)

  //   // const element = this.pdfContent.nativeElement;
  //   const element = document.getElementById('pdfContent')
  //   console.log('element1 == ', element)

  //   if (!element) return;
  //   console.log('element2 == ', element)

  //   html2canvas(element, { scale: 1 }).then((canvas) => {
  //     console.log('element == ', element)
  //     console.log('canvas == ', canvas)
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF('landscape', 'mm', 'a4'); 

  //     const imgWidth = 297; 
  //     const pageHeight = 210;
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     let heightLeft = imgHeight;
  //     let position = 0;

  //     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;
  //     console.log('pdf ==>> ', pdf)
  //     while (heightLeft > 0) {
  //       position = heightLeft - imgHeight;
  //       pdf.addPage();
  //       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight;
  //     }

  //     pdf.save('certificate.pdf');
  //     this.modalClose.emit();
  //   }).catch(error => {
  //     console.error('Error generating PDF:', error);
  //     this.modalClose.emit();
  //   });
  // }
  isLoading = false
  certificate_displays = false

  downloadAsPDF() {
    this.isLoading = true;
    console.log('downloadAsPDF method triggered');
    

    const element = document.getElementById('pdfContent');
    console.log('element found:', element);

    if (!element) {
        console.error("Element with ID 'pdfContent' not found");
        this.isLoading = false;
        return;
    }
    element.classList.remove('d-none');

    const originalDisplay = element.style.display;
    element.style.display = 'block';  

    html2canvas(element, { scale: 2 }).then((canvas) => {
        console.log('Canvas generated:', canvas);
        // element.style.display = 'none';  
        element.style.display = originalDisplay;  

        const imgData = canvas.toDataURL('image/png');

        // Convert HTML dimensions to mm
        const pxToMm = 0.264583; // Conversion factor
        const imgWidthMm = canvas.width * pxToMm;  // 900px → ~238mm
        const imgHeightMm = canvas.height * pxToMm; // 636px → ~168mm

        // Create PDF with exact dimensions
        const pdf = new jsPDF({
            orientation: imgWidthMm > imgHeightMm ? 'landscape' : 'portrait',
            unit: 'mm',
            format: [imgWidthMm, imgHeightMm] // Custom size
        });

        console.log('jsPDF instance created with size:', imgWidthMm, 'x', imgHeightMm);

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidthMm, imgHeightMm);
        pdf.save('certificate.pdf');

        // Restore original display property after capturing
        element.style.display = originalDisplay;  

        this.isLoading = false; // Stop loader after download
        this.modalClose.emit();
    }).catch(error => {
        console.error('Error generating PDF:', error);

        // Restore original display property even if error occurs
        element.style.display = originalDisplay;  

        this.isLoading = false; // Stop loader on error
        this.modalClose.emit();
    });
}


//   downloadAsPDF() {
//     this.isLoading = true; // Start loader
//     console.log('downloadAsPDF method triggered');

//     const element = document.getElementById('pdfContent');
//     console.log('element found:', element);

//     if (!element) {
//         console.error("Element with ID 'pdfContent' not found");
//         this.isLoading = false;
//         return;
//     }

//     element.classList.remove('d-none'); // Ensure it's visible

//     html2canvas(element, { scale: 2 }).then((canvas) => {
//         console.log('Canvas generated:', canvas);
//         element.classList.add('d-none'); // Restore after capture

//         const imgData = canvas.toDataURL('image/png');

//         // Convert HTML dimensions to mm
//         const pxToMm = 0.264583; // Conversion factor
//         const imgWidthMm = canvas.width * pxToMm;  // 900px → ~238mm
//         const imgHeightMm = canvas.height * pxToMm; // 636px → ~168mm

//         // Create PDF with exact dimensions
//         const pdf = new jsPDF({
//             orientation: imgWidthMm > imgHeightMm ? 'landscape' : 'portrait',
//             unit: 'mm',
//             format: [imgWidthMm, imgHeightMm] // Custom size
//         });

//         console.log('jsPDF instance created with size:', imgWidthMm, 'x', imgHeightMm);

//         pdf.addImage(imgData, 'PNG', 0, 0, imgWidthMm, imgHeightMm);
//         pdf.save('certificate.pdf');

//         this.isLoading = false; // Stop loader after download
//         this.modalClose.emit();
//     }).catch(error => {
//         console.error('Error generating PDF:', error);
//         this.isLoading = false; // Stop loader on error
//         this.modalClose.emit();
//     });
// }

  // downloadAsPDF() {
  //   this.isLoading = true; // Start loader
  //   console.log('downloadAsPDF method triggered');
  
  //   const element = document.getElementById('pdfContent');
  //   console.log('element found:', element);
  
  //   if (!element) {
  //     console.error("Element with ID 'pdfContent' not found");
  //     this.isLoading = false;
  //     return;
  //   }
  
  //   element.classList.remove('d-none'); // Ensure it's visible
  
  //   html2canvas(element, { scale: 2 }).then((canvas) => {
  //     console.log('Canvas generated:', canvas);
  //     element.classList.add('d-none'); // Restore after capture
  
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF('portrait', 'mm', 'a4');
  //     console.log('jsPDF instance created');
  
  //     const imgWidth = 210;
  //     const pageHeight = 297;
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     let heightLeft = imgHeight;
  //     let position = 0;
  
  //     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;
  
  //     while (heightLeft > 0) {
  //       position = heightLeft - imgHeight;
  //       pdf.addPage();
  //       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight;
  //     }
  
  //     pdf.save('certificate.pdf');
  //     this.isLoading = false; // Stop loader after download
  //     this.modalClose.emit();
  //   }).catch(error => {
  //     console.error('Error generating PDF:', error);
  //     this.isLoading = false; // Stop loader on error
  //     this.modalClose.emit();
  //   });
  // }
  
  async exportToPDF() {
    const element: HTMLElement | null = document.getElementById('pdfContent');
    if (!element) {
      console.error("Element with ID 'pdfContent' not found");
      return;
    }
    element.classList.remove('d-none');

    const canvas = await html2canvas(element);
    // const canvas = await html2canvas(this.pdfContent.nativeElement);
    console.log('canvas = ', canvas)
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4'); // Create a PDF in portrait mode

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    let position = 0;

    // Loop through the content to handle pagination
    while (position < canvas.height) {
      const imgHeight = Math.min(
        pdf.internal.pageSize.getHeight(),
        canvas.height - position
      );
      pdf.addImage(
        imgData,
        'PNG',
        0,
        0,
        pdfWidth,
        pdfHeight,
        undefined,
        'NONE',
        position
      );
      position += pdf.internal.pageSize.getHeight();

      if (position < canvas.height) {
        pdf.addPage();
      }
    }

    pdf.save('exported.pdf');
  }
  

  // downloadAsPDF() {
  //   const element = this.pdfContent.nativeElement;

  //   toPng(element)
  //     .then((dataUrl) => {
  //       const pdf = new jsPDF('landscape', 'mm', 'a4');
  //       const imgWidth = 297; // A4 width
  //       const imgHeight = (element.clientHeight * imgWidth) / element.clientWidth;
  //       pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);
  //       pdf.save('certificate.pdf');
  //     })
  //     .catch((error) => {
  //       console.error('Error generating PDF:', error);
  //     });
  // }
}
