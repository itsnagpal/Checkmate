import { Component } from '@angular/core';

interface Task {
  title: string;
  description: string;
  priority: string;
}

interface Checklist {
  name: string;
  department: string;
  tasks: Task[];
}

@Component({
  selector: 'app-checklist-builder',
  templateUrl: './checklist-builder.component.html',
  styleUrls: ['./checklist-builder.component.css']
})
export class ChecklistBuilderComponent {

  checklist: Checklist = {
    name: '',
    department: '',
    tasks: []
  };

  addTask() {
    this.checklist.tasks.push({
      title: '',
      description: '',
      priority: 'Low'
    });
  }

  removeTask(index: number) {
    this.checklist.tasks.splice(index, 1);
  }

  saveChecklist() {
    console.log("Checklist Data:", this.checklist);
    alert("Checklist Created Successfully!");
  }
}
