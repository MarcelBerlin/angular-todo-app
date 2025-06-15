import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [];

  constructor() { 
    this.loadFromStorage();
  }

  private saveToStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  private loadFromStorage(): void {
    const saved = localStorage.getItem('todos');
    this.todos = saved ? JSON.parse(saved) : [];
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,    
    };
    this.todos.push(newTodo);
    this.saveToStorage();
  }


  toggleTodo(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed =!todo.completed;
      this.saveToStorage();
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
    this.saveToStorage();
  }

}
