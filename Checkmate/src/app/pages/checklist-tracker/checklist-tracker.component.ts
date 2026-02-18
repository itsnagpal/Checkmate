import { Component } from '@angular/core';

@Component({
  selector: 'app-checklist-tracker',
  templateUrl: './checklist-tracker.component.html',
  styleUrls: ['./checklist-tracker.component.css']
})
export class ChecklistTrackerComponent {

  checklists = [
    {
      name: 'Employee Onboarding',
      department: 'HR',
      progress: 70,
      status: 'In Progress'
    },
    {
      name: 'IT Asset Audit',
      department: 'IT',
      progress: 40,
      status: 'Pending'
    },
    {
      name: 'Marketing Launch',
      department: 'Marketing',
      progress: 100,
      status: 'Completed'
    }
  ];
}
