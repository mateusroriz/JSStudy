import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from './task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filter: string = 'all';
  editingTaskId: number | null = null; // ID da tarefa sendo editada

  constructor() {
    const savedTasks = localStorage.getItem('tasks');
    this.tasks = savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, title: 'Aprender Angular', completed: false },
      { id: 2, title: 'Fazer café', completed: true }
    ];
    this.applyFilter();
  }

  addTask(title: string) {
    if (title.trim() === '') {
      return;
    }
    const newTask: Task = {
      id: this.tasks.length + 1,
      title,
      completed: false
    };
    this.tasks.push(newTask);
    this.saveTasks();
    this.applyFilter();
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
    this.saveTasks();
    this.applyFilter();
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
    this.applyFilter();
  }

  clearCompleted() {
    const completedCount = this.tasks.filter(task => task.completed).length;
    if (completedCount === 0) {
      return;
    }
    if (confirm(`Deseja remover ${completedCount} tarefa(s) concluída(s)?`)) {
      this.tasks = this.tasks.filter(task => !task.completed);
      this.saveTasks();
      this.applyFilter();
    }
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  pendingTasksCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  applyFilter() {
    if (this.filter === 'pending') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    } else if (this.filter === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else {
      this.filteredTasks = [...this.tasks];
    }
  }

  toggleAll() {
    const allCompleted = this.allCompleted();
    this.tasks.forEach(task => task.completed = !allCompleted);
    this.saveTasks();
    this.applyFilter();
  }

  allCompleted(): boolean {
    return this.tasks.length > 0 && this.tasks.every(task => task.completed);
  }

  startEditing(task: Task) {
    this.editingTaskId = task.id; // Define a tarefa em edição
  }

  saveEdit(task: Task) {
    if (task.title.trim() === '') {
      this.removeTask(task.id); // Remove se o título ficar vazio
    }
    this.editingTaskId = null; // Sai do modo de edição
    this.saveTasks();
    this.applyFilter();
  }
}
