import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public router: Router) {}

  // 3. Helper Function: Title change karne ke liye
  getPageTitle(): string {
    if (this.router.url.includes('/admin-dashboard')) {
      return 'Admin Dashboard';
    }
    return 'My Dashboard'; // Default
  }
}
