import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-checklists',
  templateUrl: './admin-checklists.component.html',
  styleUrls: ['./admin-checklists.component.css']
})
export class AdminChecklistsComponent {

  checklistName: string = '';
  department: string = '';
  tasks: string[] = [];

  addTask() {
    this.tasks.push('');
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  createChecklist() {
    if (!this.checklistName || !this.department) {
      alert('Please fill all fields');
      return;
    }

    alert('Checklist Created Successfully!');
    console.log({
      checklistName: this.checklistName,
      department: this.department,
      tasks: this.tasks
    });

    this.checklistName = '';
    this.department = '';
    this.tasks = [];
  }
}