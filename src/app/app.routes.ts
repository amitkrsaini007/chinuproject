import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:"", component:LoginComponent},
    {path:"signup", component:SignupComponent},
    
];
