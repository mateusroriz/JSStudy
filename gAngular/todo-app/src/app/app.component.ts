import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Task } from './task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filter: string = 'all';
  categoryFilter: string = 'all';
  categories: string[] = ['Trabalho', 'Pessoal', 'Compras', 'Outros'];
  newTaskCategory: string = this.categories[0];
  editingTaskId: number | null = null;
  // Mapeamento de cores para categorias
  categoryColors: { [key: string]: string } = {
    Trabalho: '#007bff', // Azul
    Pessoal: '#28a745', // Verde
    Compras: '#ffc107', // Amarelo
    Outros: '#6c757d' // Cinza
  };

  constructor() {
    const savedTasks = localStorage.getItem('tasks');
    this.tasks = savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, title: 'Aprender Angular', completed: false, category: 'Trabalho' },
      { id: 2, title: 'Fazer café', completed: true, category: 'Pessoal' }
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
      completed: false,
      category: this.newTaskCategory
    };
    this.tasks.push(newTask);
    this.newTaskCategory = this.categories[0];
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
    let tempTasks = [...this.tasks];

    if (this.filter === 'pending') {
      tempTasks = tempTasks.filter(task => !task.completed);
    } else if (this.filter === 'completed') {
      tempTasks = tempTasks.filter(task => task.completed);
    }

    if (this.categoryFilter !== 'all') {
      tempTasks = tempTasks.filter(task => task.category === this.categoryFilter);
    }

    this.filteredTasks = tempTasks;
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
    this.editingTaskId = task.id;
  }

  saveEdit(task: Task) {
    if (task.title.trim() === '') {
      this.removeTask(task.id);
    }
    this.editingTaskId = null;
    this.saveTasks();
    this.applyFilter();
  }

  drop(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    this.saveTasks();
    this.applyFilter();
  }

  getCategoryColor(category: string): string {
    return this.categoryColors[category] || '#6c757d'; // Cor padrão se a categoria não existir
  }
}