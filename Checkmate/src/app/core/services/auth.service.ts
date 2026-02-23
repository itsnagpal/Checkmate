import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private role: string = 'ADMIN'; // Change to USER to test

  isAdmin(): boolean {
    return this.role === 'ADMIN';
  }

  getRole(): string {
    return this.role;
  }
}