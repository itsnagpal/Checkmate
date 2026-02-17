import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  
  // Widget: Users List
  users = [
    { name: 'Sarah Chen (Admin)', role: 'Admin', img: 'assets/user1.png' }, // Images assets folder me daal lena
    { name: 'Mike Ross (Pemin)', role: 'Editor', img: 'assets/user2.png' },
    { name: 'Rachel Green', role: 'Viewer', img: 'assets/user3.png' },
    { name: 'John Doe', role: 'Admin', img: 'assets/user4.png' }
  ];

  // Widget: Departments List
  departments = [
    { name: 'Sales (T)', count: 15 },
    { name: 'Marketing', count: 20 },
    { name: 'Development', count: 12 }
  ];
}