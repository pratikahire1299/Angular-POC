import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up-page/sign-up-page.component'; // Import your components
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { CandidatesComponent } from './candidates/candidates.component';

export const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInPageComponent },
  { path: 'candidates', component: CandidatesComponent },
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' },
];
