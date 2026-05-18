import { Component } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}