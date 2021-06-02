import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from '../models/todo';
import {Store} from '@ngrx/store';
import {selectTodos} from '../store/selectors';
import {loadTodos, toggleTodoState, addTodo} from '../store/actions';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Array<Todo>>;

  constructor(private store: Store, public dialog: MatDialog) {
    this.todos$ = this.store.select(selectTodos);
  }

  ngOnInit(): void {
     this.store.dispatch(loadTodos());
  }

  setTodo(isClosed: boolean, todoId: string): void {
    this.store.dispatch(toggleTodoState({isClosed, todoId}));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(addTodo({todo: result}));
      }
    });
  }
}
