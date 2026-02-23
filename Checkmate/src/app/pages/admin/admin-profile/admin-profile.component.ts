import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {

  user = {
    fullName: 'John Doe',
    email: 'john.doe@company.com',
    jobTitle: 'IT Support',
    department: 'IT Department',
    inAppAlerts: true,
    newAssignments: true,
    taskOverdue: false,
    workflowApprovals: false,
    newPassword: '',
    confirmPassword: ''
  };

  filters = {
    dateRange: '',
    department: '',
    owner: ''
  };

  dateOptions = ['Today', 'This Week', 'This Month', 'Custom'];
  departmentOptions = ['IT', 'HR', 'Marketing', 'Sales'];
  ownerOptions = ['Admin', 'Manager', 'User'];

  applyFilters() {
    console.log('Filters Applied:', this.filters);
  }

  saveChanges() {
    alert('Changes saved!');
  }

  updateProfile() {
    alert('Profile updated!');
  }
}