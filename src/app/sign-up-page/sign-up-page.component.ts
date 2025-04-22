import { Component, ElementRef, Input, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignUpPageSerivce } from './sign-up-page.service';
import { CommonModule } from '@angular/common';
import { ToastService } from '../toast/toast.service';


@Component({
  selector: 'app-sign-up-button',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css',
  standalone: true
})
export class SignUpComponent {

  constructor(
    private signUpPageSerivce: SignUpPageSerivce,
    private toastService: ToastService
  ) {

  }
  isPolicyAccepted = false;
  passwordsMatch = true;
  confirmPasswordValue = '';

  @Input() imagePath!: string;
  usersArray: any = []
  // Just for propery binding
  metaImages = "assets/privacy-policy-pana.svg"

  signUpUser(form: NgForm, email: string, password: string) {
    if (!this.checkPasswordsMatch(password)) {
      this.toastService.showError('Passwords do not match');
      return;
    } 

    if (!form.valid || !this.isPolicyAccepted) {
      return;
    }

    this.signUpPageSerivce.addNewUser({
      email, password
    })
  }

  checkPasswordsMatch(password: string): boolean {
    return this.confirmPasswordValue === password;
  }


}
