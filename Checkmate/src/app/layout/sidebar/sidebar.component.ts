import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    public router: Router,
    public authService: AuthService
  ) {}

  // Highlight active route
  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }

  // Check if logged user is admin
  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  // Logout handler
  onLogout(): void {
    this.authService.logout();
  }
}
