// notification-container.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';     
import { NotificationService } from '../services/notification.service';
import { AppNotification } from '../models/notifcation.model';

@Component({
  selector: 'app-notification-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent {
  notifications$: Observable<AppNotification[]>;

  constructor(private notificationService: NotificationService) {
    this.notifications$ = this.notificationService.notifications$;
  }

  remove(id: number) {
    this.notificationService.remove(id);
  }

  getTypeLabel(type: AppNotification['type']): string {
    return type.charAt(0).toUpperCase() + type.slice(1);
  }
}