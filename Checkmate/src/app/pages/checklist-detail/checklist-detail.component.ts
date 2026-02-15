
import { Component } from '@angular/core';

@Component({
  selector: 'app-checklist-detail',
  templateUrl: './checklist-detail.component.html',
  styleUrls: ['./checklist-detail.component.css']
})
export class ChecklistDetailComponent {
  
  checklist = {
    title: 'Complete IT Setup for John Doe',
    status: 'In Progress',
    progress: 65,
    sections: [
      {
        title: 'Hardware Setup (Completed)',
        tasks: [
          { name: 'Laptop & Monitor Allocation', assignee: 'Sarah Chen', due: 'Oct 25', status: 'Completed', avatar: 'S' },
          { name: 'Desk Phone & Headset', assignee: 'Admin', due: 'Oct 26', status: 'Completed', avatar: 'A' }
        ]
      },
      {
        title: 'Software Installation (In Progress)',
        tasks: [
          { name: 'Install MS Office & VPN Client', assignee: 'John Lee', due: 'Oct 27', status: 'Completed', avatar: 'J' },
          { name: 'Install MS Office & VPN Client', assignee: 'Sarah Chen', due: 'Oct 28', status: 'In Progress', avatar: 'S' },
          { name: 'Setup Slack & Teams', status: 'Sequential Dependency', avatar: '🔒' }
        ]
      }
    ],
    auditLogs: [
      { user: 'Sarah Chen', action: 'attached Laptop_Serial.pdf', icon: '📎', isFile: false },
      { user: 'John Lee', action: 'commented: Need VPN client access granted', icon: '💬', isFile: false },
      { name: 'Laptop_Serial.pdf', icon: '📄', isFile: true }
    ],
    files: [
      { name: 'Software_Licenses.docx', icon: '📄' }
    ]
  };

  
  getStatusClass(status: string) {
    if (status === 'Completed') return 'badge-green';
    if (status === 'In Progress') return 'badge-blue';
    return 'badge-grey';
  }
}