import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignInPageSerivce } from './sign-in-page.service';

@Component({
  selector: 'app-sign-in-page',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.css'
})
export class SignInPageComponent {

  constructor(
    private signInPageSerivce: SignInPageSerivce
  ) {

  }

  metaImages = "assets/privacy-policy-pana.svg"

  getUserData(email: string, password: string) {
    this.signInPageSerivce.validateUser({
      email, password
    })
  }
}


