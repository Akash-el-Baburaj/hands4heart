import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  
  // Success Alert
  success(title: string, message: string, confirmButtonText: string = 'OK') {
    Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      confirmButtonText: confirmButtonText,
      confirmButtonColor: '#3085d6'
    });
  }

  // Error Alert
  error(title: string, message: string, confirmButtonText: string = 'OK') {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      confirmButtonText: confirmButtonText,
      confirmButtonColor: '#d33'
    });
  }

  // Warning Alert
  warn(title: string, message: string, confirmButtonText: string = 'OK') {
    Swal.fire({
      icon: 'warning',
      title: title,
      text: message,
      confirmButtonText: confirmButtonText,
      confirmButtonColor: '#ffb703'
    });
  }

  // Info Alert
  info(title: string, message: string, confirmButtonText: string = 'OK') {
    Swal.fire({
      icon: 'info',
      title: title,
      text: message,
      confirmButtonText: confirmButtonText,
      confirmButtonColor: '#17a2b8'
    });
  }

  // Customizable Alert
  custom(
    icon: 'success' | 'error' | 'warning' | 'info' | 'question',
    title: string,
    message: string,
    confirmButtonText: string = 'OK',
    options: any = {}
  ) {
    Swal.fire({
      icon,
      title,
      text: message,
      confirmButtonText,
      ...options
    });
  }
}