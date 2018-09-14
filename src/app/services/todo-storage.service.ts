import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {
  todos: string[] = [];

  constructor() {
  }

  addTodo(todoString) {
    this.todos.push(todoString);
  }
}
