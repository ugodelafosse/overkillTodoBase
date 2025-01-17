import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const loadTodos = createAction('[Todos] Load todos');

export const loadTodosSuccess = createAction(
  '[Todos] Load todos success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailed = createAction('[Todos] Load todos failed');

export const toggleTodoState = createAction('[Todos] Update todos state', props<{isClosed: boolean, todoId: string}>());

export const addTodo = createAction('[Todos] Add a todo', props<{todo: Todo}>());
