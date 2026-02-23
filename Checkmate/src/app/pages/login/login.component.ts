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
  
  if (this.loginObj.email && this.loginObj.password) {
    
   
    if (this.loginObj.email === 'admin@checkmate.com') {
      this.router.navigate(['/admin-dashboard']); 
    } else {
      this.router.navigate(['/dashboard']); 
    }

  } else {
    
    alert('Please enter email and password'); 
  }
}
}