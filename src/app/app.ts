import { Component, signal } from '@angular/core';

import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Buy } from './buy/buy';
import { Sell } from './sell/sell';
import { Rental } from './rental/rental';
import { Map } from './map/map';


@Component({
  selector: 'app-root',
  imports: [Home, Dashboard, Login, Buy, Sell, Rental, Map],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Geoproperty');
}
