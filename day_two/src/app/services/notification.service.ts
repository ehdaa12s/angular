import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppNotification } from '../models/notifcation.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = new BehaviorSubject<AppNotification[]>([]);
  notifications$ = this.notifications.asObservable();

  private counter = 0;

  show(
    message: string,
    type: AppNotification['type'] = 'info',
    duration: number = 5000
  ) {
    const id = this.counter++;
    const notification: AppNotification = { id, message, type, duration };

    this.notifications.next([...this.notifications.value, notification]);

    if (duration > 0) {
      setTimeout(() => this.remove(id), duration);
    }

    return id; 
  }

  remove(id: number) {
    this.notifications.next(
      this.notifications.value.filter(n => n.id !== id)
    );
  }


  success(message: string, duration?: number) {
    this.show(message, 'success', duration);
  }

  error(message: string, duration?: number) {
    this.show(message, 'error', duration);
  }

  warning(message: string, duration?: number) {
    this.show(message, 'warning', duration);
  }

  info(message: string, duration?: number) {
    this.show(message, 'info', duration);
  }


  clear() {
    this.notifications.next([]);
  }
}