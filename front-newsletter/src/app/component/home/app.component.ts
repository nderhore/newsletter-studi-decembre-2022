import {Component, OnInit} from '@angular/core';
import {Todo} from "../../model/Todo";
import {ApiService} from "../../service/api.service";
import {PopinTodoComponent} from "../popin-todo/popin-todo.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'front-newsletter';
  todos: Array<Todo> = [];
  charged: boolean = false;
  details: string = "details";
  update: string = "editer";
  delete: string = 'supprimer';
  termine: string = "Terminé";

  nonFini : string = "Non terminé";


  constructor(private apiService : ApiService, private dialog: MatDialog) {}

  ngOnInit() {
    this.apiService.getTodos().subscribe((todo) => {
      this.todos.push(todo);

      console.log(this.todos);
    });
    this.charged = true;
  }

  openDialog(operation: string, row: Todo) {
    let dialogRef = this.dialog.open(PopinTodoComponent, {
      data: {
        operation: operation,
        data: row
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        switch (operation) {
          case Operation.UPDATE:
            this.todos = this.todos.map((todo) => {
              if (todo.id === result.id) {
                return result;
              }
              return todo;
            });
            break;
          case Operation.DELETE:
            this.todos = this.todos.filter((todo) => {
              return todo.id !== result.id;
            });
            break;
        }
      }
    });
  }

  createDialog() {
    let dialogRef = this.dialog.open(PopinTodoComponent, {
      data: {
        operation: Operation.CREATE,
      }
    });
    dialogRef.afterClosed().subscribe((result : Todo) => {
      if (result) {
        this.todos.push(result);
      }
    });
  }

  changDone(row: Todo) {
    row.done ? row.done = false : row.done = true;
    this.apiService.updateTodoById(row.id,row);
  }
}

export enum Operation {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  READ = 'read'
}
