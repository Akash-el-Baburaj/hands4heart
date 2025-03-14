import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhonepeService {

  constructor() { }
  private merchantId = "M223UHSPONPZO"; 
  private redirectUrl = "https://localhost:4200";
  private callbackUrl = "https://localhost:4200";

  initiatePayment(amount: number, mobileNumber: string, transactionId: string) {
    const amountInPaise = amount * 100;

    const phonePeUrl = `phonepe://pay?pa=your-vpa@upi&pn=MerchantName&mc=1234&tid=${transactionId}&tr=${transactionId}&tn=Payment&am=${amount}&cu=INR&url=${this.redirectUrl}`;

    window.location.href = phonePeUrl;
  }
}
