import { Component } from '@angular/core';

interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  deadline: string;
  dependency: number | null;
  conditional: boolean;
  workflowType: 'Sequential' | 'Parallel';
}

interface Checklist {
  name: string;
  department: string;
  template: string;
  section: string;
  tasks: Task[];
}

@Component({
  selector: 'app-checklist-builder',
  templateUrl: './checklist-builder.component.html',
  styleUrls: ['./checklist-builder.component.css']
})
export class ChecklistBuilderComponent {

  templates = ['Employee Onboarding', 'Exit Process', 'Compliance Audit'];

  checklist: Checklist = {
    name: '',
    department: '',
    template: '',
    section: '',
    tasks: []
  };

  taskCounter = 0;

  addTask() {
    this.checklist.tasks.push({
      id: this.taskCounter++,
      title: '',
      description: '',
      priority: 'Low',
      deadline: '',
      dependency: null,
      conditional: false,
      workflowType: 'Sequential'
    });
  }

  removeTask(index: number) {
    this.checklist.tasks.splice(index, 1);
  }

  saveChecklist() {

    if (!this.checklist.name || !this.checklist.department) {
      alert("Checklist Name and Department are required.");
      return;
    }

    if (this.checklist.tasks.length === 0) {
      alert("Please add at least one task.");
      return;
    }

    console.log("Final Checklist Data:", this.checklist);
    alert("Checklist Created Successfully!");
  }

}