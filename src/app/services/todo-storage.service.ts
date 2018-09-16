import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {
  todos: string[] = [];

  constructor() {
  }

  addTodo(todoString) {
    if (todoString !== '') {
      this.todos = [...this.todos, todoString];
    }
  }
  getTodos() {
    return this.todos;
  }
}
