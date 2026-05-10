import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  activeSection: string = 'dashboard';

  constructor(private router: Router) {}

  changeSection(section: string) {
    this.activeSection = section;
  }

  logout() {
    this.router.navigate(['/home']);
  }
}
