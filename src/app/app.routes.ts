import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { BasketComponent } from './basket/basket.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "basket", component: BasketComponent},
    {path: "register", component: RegisterComponent},
    {path: "login", component: LoginComponent},
    {path: "**", component: ErrorComponent}
];
