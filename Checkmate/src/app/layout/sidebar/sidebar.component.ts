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
    // Agar URL mein 'admin' hai, tabhi Admin sidebar dikhao
    return this.router.url.includes('admin'); 
  }

  // Logout handler
  onLogout(): void {
    this.authService.logout();
  }
}
