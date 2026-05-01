import { Routes } from '@angular/router';
import { PropertyDetails } from './property-details/property-details';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'property/:id', component: PropertyDetails }
];
