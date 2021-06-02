import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Todo} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class MockTodoApi implements InMemoryDbService {

  createDb(): {} {
    const todos: Todo[] = [
      { title: 'todo in memory 1', description: 'todo in memory 1 desc', isClosed: false },
      { title: 'todo in memory 2', description: 'todo in memory 2 desc', isClosed: false },
      { title: 'todo in memory 3', description: 'todo in memory 3 desc', isClosed: true },
      { title: 'todo in memory 4', description: 'todo in memory 4 desc', isClosed: false },
    ];
    return { todos };
  }

}
