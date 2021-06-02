import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Todo} from '../models/todo';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  todo: Todo;

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {
    this.todo = {
      title: '',
      description: '',
      isClosed: false,
    };
  }

  add(): void {
    this.dialogRef.close(this.todo);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
