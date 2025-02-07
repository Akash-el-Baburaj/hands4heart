import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Toast {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  private toasts: Toast[] = [];
  private toastSubject = new BehaviorSubject<Toast[]>([]);
  public toasts$ = this.toastSubject.asObservable();
  private currentId = 0;

  show(message: string, type: 'success' | 'error' | 'warning' | 'info') {
    const id = this.currentId++;
    this.toasts.push({ message, type, id });
    this.toastSubject.next(this.toasts);

    setTimeout(() => {
      this.removeToast(id);
    }, 5000);
  }

  private removeToast(id: number) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.toastSubject.next(this.toasts);
  }

  success(message: string) {
    this.show(message, 'success');
  }

  error(message: string) {
    this.show(message, 'error');
  }

  warning(message: string) {
    this.show(message, 'warning');
  }

  info(message: string) {
    this.show(message, 'info');
  }
}
