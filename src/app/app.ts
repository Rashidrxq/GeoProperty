import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Buy } from './buy/buy';
import { Sell } from './sell/sell';
import { Rental } from './rental/rental';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Dashboard, Login, Buy, Sell, Rental],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Geoproperty');
}
