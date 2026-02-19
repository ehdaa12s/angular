import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.css'
})
export class Task2Component {
  firstName = '';

private images = [
  'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=2400',
  'https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?auto=format&fit=crop&q=80&w=2400',
  'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=2400',
  'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=2400'
];


  currentIndex = signal(0);
  private intervalId: any = null;

  get currentImage(): string {
    return this.images[this.currentIndex()];
  }

  reset(): void {
    this.firstName = '';
  }

  toggleSlide(): void {
    if (this.intervalId) {
      this.stop();
    } else {
      this.intervalId = setInterval(() => this.next(), 3200);
    }
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  next(): void {
    this.currentIndex.update(i => (i + 1) % this.images.length);
  }

  prev(): void {
    this.currentIndex.update(i => (i - 1 + this.images.length) % this.images.length);
  }
}