import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotificationService } from './services/notification.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],          
  template: `<router-outlet></router-outlet>`,  
}) 
  
export class App {
  protected readonly title = signal('day_two');

  constructor(private notification: NotificationService) {}

  onClick() {
    this.notification.success('Profile updated successfully!');
    this.notification.error('Failed to load user data!');
    this.notification.warning('Password is weak!');
    this.notification.info('New updates are available!');
  }
}