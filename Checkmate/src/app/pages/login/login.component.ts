import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

interface LoginForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: LoginForm = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onLogin(): void {
    // Validation check
    if (this.loginObj.email && this.loginObj.password) {
      
      // Use AuthService for login
      const success = this.authService.login(this.loginObj.email, this.loginObj.password);
      
      if (success) {
        // Navigate based on role
        if (this.authService.isAdmin()) {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      } else {
        alert('Login failed. Please try again.');
      }

<<<<<<< HEAD
    } else {
      alert('Please enter email and password');
    }
=======
  onLogin() {
  
  if (this.loginObj.email && this.loginObj.password) {
    
   
    if (this.loginObj.email === 'admin@checkmate.com') {
      this.router.navigate(['/admin-dashboard']); 
    } else {
      this.router.navigate(['/dashboard']); 
    }

  } else {
    
    alert('Please enter email and password'); 
>>>>>>> 238b9aa70725e31b506f9a90b1386d4005f49476
  }
}
