import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa o FormsModule
import { Task } from './task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adiciona o FormsModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filter: string = 'all'; // Valor padrão do filtro

  constructor() {
    const savedTasks = localStorage.getItem('tasks');
    this.tasks = savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, title: 'Aprender Angular', completed: false },
      { id: 2, title: 'Fazer café', completed: true }
    ];
    this.applyFilter(); // Aplica o filtro inicial
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
    this.applyFilter(); // Atualiza a lista filtrada
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
    this.saveTasks();
    this.applyFilter(); // Atualiza a lista filtrada
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
    this.applyFilter(); // Atualiza a lista filtrada
  }

  clearCompleted() {
    this.tasks = this.tasks.filter(task => !task.completed);
    this.saveTasks();
    this.applyFilter(); // Atualiza a lista filtrada
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
      this.filteredTasks = [...this.tasks]; // Todas as tarefas
    }
  }
}
