import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new BehaviorSubject<Toast | null>(null);
  public toast$ = this.toastSubject.asObservable();

  showSuccess(message: string, duration: number = 3000) {
    this.showToast({ message, type: 'success', duration });
  }

  showError(message: string, duration: number = 3000) {
    this.showToast({ message, type: 'error', duration });
  }

  showWarning(message: string, duration: number = 3000) {
    this.showToast({ message, type: 'warning', duration });
  }

  showInfo(message: string, duration: number = 3000) {
    this.showToast({ message, type: 'info', duration });
  }

  private showToast(toast: Toast) {
    this.toastSubject.next(toast);
    setTimeout(() => this.toastSubject.next(null), toast.duration);
  }

  clear() {
    this.toastSubject.next(null);
  }
}