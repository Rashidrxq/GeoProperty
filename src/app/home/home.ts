import { Component } from '@angular/core';
import { Buy } from '../buy/buy';
import { Sell } from '../sell/sell';
import { Rental } from '../rental/rental';

@Component({
  selector: 'app-home',
  imports: [Buy, Sell, Rental],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  
}
