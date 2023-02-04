import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Operation} from "../home/app.component";
import {Todo} from "../../model/Todo";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-popin-todo',
  templateUrl: './popin-todo.component.html',
  styleUrls: ['./popin-todo.component.css']
})
export class PopinTodoComponent {

  private operation: any;
  public data: Todo;
  public newData: Todo;


  constructor(public dialogRef: MatDialogRef<PopinTodoComponent>,
              @Inject(MAT_DIALOG_DATA) data : any, private apiService: ApiService,
               ) {

    this.operation = data.operation;
    if(data.data) {
      this.data = data.data;
    }
    else {
      this.data = new Todo({
        id: null,
        title: "",
        description: "",
        done: false,
        adresse: ""
      });
    }
    this.newData = this.data;
  }

  onSubmit() {
    this.send();
    this.dialogRef.close(this.data);
  }

  private send() {
    if (this.operation === Operation.CREATE) {
      this.apiService.createTodo(this.data);
    } else if (this.operation === Operation.UPDATE) {
      this.apiService.updateTodoById(this.data.id, this.data);
    } else if (this.operation === Operation.DELETE) {
      this.apiService.deleteTodoById(this.data.id);
    }
  }

  namePopin() : string {
    if (this.operation === Operation.CREATE) {
      return "Création d'un todo";
    } else if (this.operation === Operation.UPDATE) {
      return "Modification d'un todo";
    } else if (this.operation === Operation.DELETE) {
      return "Suppression d'un todo";
    } else if (this.operation === Operation.READ) {
      return "Détails d'un todo";
    }
    else{
      return "Erreur";
    }
  }

  isReadOnly() : boolean {
    return this.operation === Operation.READ || this.operation === Operation.DELETE;
  }

  delete() {
    this.send();
    this.dialogRef.close(true);
  }

  deleteMode() {
    return this.operation === Operation.DELETE;
  }

  abort() {
    this.newData = this.data;
    this.dialogRef.close();
  }

  createMode() {
    return this.operation === Operation.CREATE;
  }

  editMode() {
    return this.operation === Operation.UPDATE;
  }
}
