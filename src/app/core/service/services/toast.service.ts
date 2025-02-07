import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  // private toastConfig: SweetAlertOptions = {
  //   toast: true,
  //   position: 'top-end',
  //   showConfirmButton: false,
  //   timer: 3000,
  //   timerProgressBar: true,
  //   didOpen: (toast) => {
  //     toast.addEventListener('mouseenter', Swal.stopTimer);
  //     toast.addEventListener('mouseleave', Swal.resumeTimer);
  //   }
  // };

  // success(message: string, title = 'Success!') {
  //   Swal.fire({
  //     ...this.toastConfig,
  //     icon: 'success',
  //     title,
  //     text: message,
  //     background: '#f6fff6',
  //     iconColor: '#4caf50'
  //   } as SweetAlertOptions);
  // }

  // error(message: string, title = 'Error!') {
  //   Swal.fire({
  //     ...this.toastConfig,
  //     icon: 'error',
  //     title,
  //     text: message,
  //     background: '#fff0f0',
  //     iconColor: '#f44336'
  //   } as SweetAlertOptions);
  // }

  // warning(message: string, title = 'Warning!') {
  //   Swal.fire({
  //     ...this.toastConfig,
  //     icon: 'warning',
  //     title,
  //     text: message,
  //     background: '#fff9e6',
  //     iconColor: '#ff9800'
  //   } as SweetAlertOptions);
  // }

  // info(message: string, title = 'Info!') {
  //   Swal.fire({
  //     ...this.toastConfig,
  //     icon: 'info',
  //     title,
  //     text: message,
  //     background: '#e6f4ff',
  //     iconColor: '#2196f3'
  //   } as SweetAlertOptions);
  // }
   // Base configuration for all toasts
   private toastConfig: SweetAlertOptions = {
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  };

  // Success Toast
  success(message: string, title = 'Success!') {
    this.showToast('success', title, message, '#4CAF50', '#f6fff6');
  }

  // Error Toast
  error(message: string, title = 'Error!') {
    this.showToast('error', title, message, '#f44336', '#fff0f0');
  }

  // Warning Toast
  warning(message: string, title = 'Warning!') {
    this.showToast('warning', title, message, '#FF9800', '#fff9e6');
  }

  // Info Toast
  info(message: string, title = 'Info!') {
    this.showToast('info', title, message, '#2196F3', '#e6f4ff');
  }

  // Generic method to reduce code duplication
  private showToast(
    icon: 'success' | 'error' | 'warning' | 'info',
    title: string,
    message: string,
    iconColor: string,
    background: string
  ) {
    Swal.fire({
      ...this.toastConfig,
      icon,
      title,
      text: message,
      iconColor,
      background
    } as SweetAlertOptions);
  }
}
