import {Component} from '@angular/core';
import {TodoStorageService} from '../../services/todo-storage.service';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent {
  constructor(public storageService: TodoStorageService) {
  }

  addNewTodo(input: HTMLInputElement) {
    this.storageService.addTodo(input.value);
  }
}
