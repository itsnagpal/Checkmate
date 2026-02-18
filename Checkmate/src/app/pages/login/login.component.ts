import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onLogin() {
  // 1. Validation check
  if (this.loginObj.email && this.loginObj.password) {
    
    // 2. Mock Logic (Bina Alert ke seedha navigate karega)
    if (this.loginObj.email === 'admin@checkmate.com') {
      this.router.navigate(['/admin-dashboard']); // Admin -> Admin Dashboard
    } else {
      this.router.navigate(['/dashboard']); // Baaki sab -> User Dashboard
    }

  } else {
    // Ye error alert rehne de sakte hain taaki user ko pata chale form khali hai
    // Ya isse bhi hata kar console.log kar sakte hain
    alert('Please enter email and password'); 
  }
}
}