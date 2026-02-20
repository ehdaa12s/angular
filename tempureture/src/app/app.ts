import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,TemperatureConverterComponent],
  templateUrl: './temperature-converter/temperature-converter.component.html',
  styleUrl: './temperature-converter/temperature-converter.component.css'
})
export class App {
  protected readonly title = signal('day_three');
    fahrenheit: number = 32;

  onFahrenheitInput(event: Event): void {
    const v = (event.target as HTMLInputElement).value;
    this.fahrenheit = v === '' ? NaN : Number(v);
  }
  celsius: number = 0;
 

  onCelsiusInput(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.celsius = input === '' ? NaN : Number(input);

    if (input === '' || isNaN(Number(input))) {
      this.fahrenheit = NaN;
    } else {
      const c = Number(input);
      this.fahrenheit = Number((c * 9/5 + 32).toFixed(2));
    }
  }

 

    
  
}
