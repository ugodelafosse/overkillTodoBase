import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Todo} from '../models/todo';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectTodos} from '../store/selectors';
import {loadTodos} from '../store/actions';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit, OnDestroy {
  selectedTodo: any;
  routeSub: Params;
  storeSub: Observable<Todo[]>;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.routeSub = this.route.params;
    this.storeSub = this.store.select(selectTodos);
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
    this.routeSub.subscribe((params: Params) => {
      this.storeSub.subscribe((todos) => {
        console.log(params.id);
        for (const todo of todos) {
          console.log(todo.title);
          if (todo.title === params.id){
            this.selectedTodo = todo;
            console.log(this.selectedTodo);
          }
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
