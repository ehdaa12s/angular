import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, HighlightDirective],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {}