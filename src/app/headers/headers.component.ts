import { Component, input } from '@angular/core';

@Component({
  selector: 'app-headers',
  imports: [],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent {
  title = input<string>();
}
