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
  categories: string[] = [];
  categoryColors: { [key: string]: string } = {};
  newTaskCategory: string = '';
  editingTaskId: number | null = null;
  showCategoryModal: boolean = false;
  editingCategory: string | null = null;
  newCategoryName: string = '';
  newCategoryColor: string = '#6c757d';

  constructor() {
    const savedCategories = localStorage.getItem('categories');
    const savedColors = localStorage.getItem('categoryColors');
    this.categories = savedCategories
      ? JSON.parse(savedCategories)
      : ['Trabalho', 'Pessoal', 'Compras', 'Outros'];
    this.categoryColors = savedColors
      ? JSON.parse(savedColors)
      : {
          Trabalho: '#007bff',
          Pessoal: '#28a745',
          Compras: '#ffc107',
          Outros: '#6c757d'
        };
    this.newTaskCategory = this.categories[0];

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

  private saveCategories() {
    localStorage.setItem('categories', JSON.stringify(this.categories));
    localStorage.setItem('categoryColors', JSON.stringify(this.categoryColors));
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
    return this.categoryColors[category] || '#6c757d';
  }

  openCategoryModal(category: string | null = null) {
    this.editingCategory = category;
    this.newCategoryName = category || '';
    this.newCategoryColor = category ? this.categoryColors[category] : '#6c757d';
    this.showCategoryModal = true;
  }

  saveCategory() {
    if (this.newCategoryName.trim() === '') {
      return;
    }
    if (this.editingCategory) {
      const oldCategory = this.editingCategory;
      const newCategory = this.newCategoryName;
      if (oldCategory !== newCategory) {
        this.tasks = this.tasks.map(task =>
          task.category === oldCategory ? { ...task, category: newCategory } : task
        );
        this.categories = this.categories.map(cat =>
          cat === oldCategory ? newCategory : cat
        );
      }
      delete this.categoryColors[oldCategory];
      this.categoryColors[newCategory] = this.newCategoryColor;
    } else {
      if (!this.categories.includes(this.newCategoryName)) {
        this.categories.push(this.newCategoryName);
        this.categoryColors[this.newCategoryName] = this.newCategoryColor;
      }
    }
    this.saveCategories();
    this.saveTasks();
    this.newTaskCategory = this.categories[0];
    this.applyFilter();
    this.closeCategoryModal();
  }

  closeCategoryModal() {
    this.showCategoryModal = false;
    this.editingCategory = null;
    this.newCategoryName = '';
    this.newCategoryColor = '#6c757d';
  }

  deleteCategory(category: string) {
    // Impede a exclusão se for a última categoria
    if (this.categories.length <= 1) {
      alert('Não é possível excluir a última categoria. Deve haver pelo menos uma categoria.');
      return;
    }

    // Confirmação do usuário
    const tasksInCategory = this.tasks.filter(task => task.category === category).length;
    if (!confirm(`Deseja excluir a categoria "${category}"? ${tasksInCategory} tarefa(s) será(ão) movida(s) para "${this.categories[3]}".`)) {
      return;
    }

    // Move tarefas da categoria excluída para a primeira categoria da lista
    this.tasks = this.tasks.map(task =>
      task.category === category ? { ...task, category: this.categories[3] } : task
    );

    // Remove a categoria e sua cor
    this.categories = this.categories.filter(cat => cat !== category);
    delete this.categoryColors[category];

    // Ajusta categoryFilter e newTaskCategory, se necessário
    if (this.categoryFilter === category) {
      this.categoryFilter = 'all';
    }
    if (this.newTaskCategory === category) {
      this.newTaskCategory = this.categories[0];
    }

    // Salva as alterações e atualiza a lista
    this.saveCategories();
    this.saveTasks();
    this.applyFilter();
  }
}