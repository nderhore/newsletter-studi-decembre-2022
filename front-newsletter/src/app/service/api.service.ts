import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../model/Todo";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url : string = 'http://localhost:8080/api/todos';

  constructor(private http: HttpClient) { }

  getTodos() : Observable<Todo>{
    let todolist = new Subject<Todo>();
    this.http.get<Todo[]>(this.url).subscribe(data => {
      data.map((todo) => {
        todolist.next(new Todo(todo));
      })
    });
    return todolist.asObservable();
  }

  getTodoById(id: number) {
    this.http.get<Todo>(this.url + '/' + id).subscribe(data => {
      return data;
    });
  }

  createTodo(todo: Todo) {
    return this.http.post(this.url, todo).subscribe({});
  }

  updateTodoById(id: number, todo:  Todo) {
    return this.http.put(this.url + '/' + id, todo).subscribe({});
  }

  deleteTodoById(id: number) {
    this.http.delete(this.url + '/' + id).subscribe({});
  }

}
