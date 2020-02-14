import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/dto/todo';
import { TodosService } from 'src/app/services/todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  title: string;
  description: string;
  todos$: Observable<Todo[]>;

  constructor(private todosService: TodosService, private router: Router) {
    this.todos$ = todosService.entities$;
  }

  testModel() {
    console.log('update');
    return '12';
  }

  getTodos() {
    this.todosService.getAll();
  }

  deleteTodo(todoId: number) {
    this.todosService.delete(todoId);
  }

  updateTodo(todo: Todo) {
    todo.active = !todo.active;
    this.todosService.update(todo);
  }

  ngOnInit() {
    this.getTodos();
  }

  editTodo(id: number) {
    this.router.navigate(['todopage', id]);
  }

}
