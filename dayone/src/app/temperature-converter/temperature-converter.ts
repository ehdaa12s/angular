import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // ← added for *ngIf
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],   // ← important: CommonModule for *ngIf
  templateUrl: './temperature-converter.component.html',
  styleUrl: './temperature-converter.component.css'
})
export class TemperatureConverterComponent {
  celsius: string = '';
  fahrenheit: string = '';

  onCelsiusInput(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.celsius = input;

    if (input === '' || isNaN(Number(input))) {
      this.fahrenheit = '';
    } else {
      const c = Number(input);
      this.fahrenheit = (c * 9/5 + 32).toFixed(2);
    }
  }

  onFahrenheitInput(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.fahrenheit = input;

    if (input === '' || isNaN(Number(input))) {
      this.celsius = '';
    } else {
      const f = Number(input);
      this.celsius = ((f - 32) * 5/9).toFixed(2);
    }
  }
}