import { Component } from '@angular/core';

interface User {
  name: string;
  department: string;
  roleEnabled: boolean;
  executorEnabled: boolean;
  role: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {

  users: User[] = [
    {
      name: 'Sarah Chen',
      department: 'Admin',
      roleEnabled: true,
      executorEnabled: false,
      role: 'Reviewer'
    },
    {
      name: 'Sarah Dhen',
      department: 'HR',
      roleEnabled: false,
      executorEnabled: true,
      role: 'HR'
    },
    {
      name: 'John Doe',
      department: 'Engineering',
      roleEnabled: true,
      executorEnabled: true,
      role: 'Engineering'
    },
    {
      name: 'Setup Pits & Headset',
      department: 'Sales',
      roleEnabled: true,
      executorEnabled: true,
      role: 'Sales'
    }
  ];

  selectedUser: User | null = null;

  selectUser(user: User) {
    this.selectedUser = user;
  }

}