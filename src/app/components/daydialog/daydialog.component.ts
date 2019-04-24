import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-daydialog',
  templateUrl: './daydialog.component.html',
  styleUrls: ['./daydialog.component.css']
})
export class DaydialogComponent implements OnInit {

  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<DaydialogComponent>, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      day: new FormControl
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

}
