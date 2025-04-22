import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUpComponent } from "./sign-up-page/sign-up-page.component";
import { HeadersComponent } from "./headers/headers.component";
import { ToastComponent } from './toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Checkers App';
}


