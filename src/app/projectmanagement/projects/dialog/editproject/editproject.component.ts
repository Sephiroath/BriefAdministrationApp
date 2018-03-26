import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
  selector: 'baconcha-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.scss']
})
export class EditprojectComponent {
  formControl = new FormControl('', [
    Validators.required
  ]);
  constructor(public dialogRef: MatDialogRef<EditprojectComponent>) { }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Campo Requerido' :
        '';
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    // empty stuff
  }

  public stopEdit() {
    // TODO: CALL REDUCER
  }

}
