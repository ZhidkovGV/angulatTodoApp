import {Component, OnInit} from '@angular/core';
import {TodoStorageService} from '../../services/todo-storage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: string[];

  constructor(private todoStorage: TodoStorageService) {
  }

  ngOnInit() {
    this.todos = this.todoStorage.getTodos();
    console.log(this.todos);
  }

}
