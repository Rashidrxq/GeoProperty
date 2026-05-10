import { Routes } from '@angular/router';
import { PropertyDetails } from './property-details/property-details';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'login', component: Login },
    { path: 'property/:id', component: PropertyDetails },
    { path: 'dashboard', component: Dashboard }
];
