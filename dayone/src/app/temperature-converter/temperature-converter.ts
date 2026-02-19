import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.css']
})
export class TemperatureConverterComponent {

  celsius: number | null = -55;
  fahrenheit: number | null = -67;

  updatingFromCelsius = false;
  updatingFromFahrenheit = false;

  onCelsiusChange() {
    if (this.updatingFromFahrenheit) return;
    this.updatingFromCelsius = true;

    if (this.celsius !== null) {
      this.fahrenheit = +(this.celsius * 9 / 5 + 32).toFixed(2);
    } else {
      this.fahrenheit = null;
    }

    this.updatingFromCelsius = false;
  }

  onFahrenheitChange() {
    if (this.updatingFromCelsius) return;
    this.updatingFromFahrenheit = true;

    if (this.fahrenheit !== null) {
      this.celsius = +((this.fahrenheit - 32) * 5 / 9).toFixed(2);
    } else {
      this.celsius = null;
    }

    this.updatingFromFahrenheit = false;
  }
}
