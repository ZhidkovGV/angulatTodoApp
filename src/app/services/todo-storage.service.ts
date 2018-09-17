import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {
  todos: string[] = [];

  constructor() {
  }

  addTodo(todoString) {
    if (todoString !== '') {
      this.todos.push(todoString);
    }
  }
  getTodos(): Observable<string[]> {
    return of(this.todos);
  }
}
