import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public router: Router) {}

  // Helper function to check if we are in Admin area
  isAdmin(): boolean {
    return this.router.url.includes('admin-dashboard');
  }
}
