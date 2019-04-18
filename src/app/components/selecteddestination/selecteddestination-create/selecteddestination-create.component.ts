import { Component, OnInit } from '@angular/core';
import { SelecteddestinationService } from '../../../services/selecteddestination.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecteddestination-create',
  templateUrl: './selecteddestination-create.component.html',
  styleUrls: ['./selecteddestination-create.component.css']
})
export class SelecteddestinationCreateComponent implements OnInit {

  selecteddestinationForm: FormGroup;

  constructor(private _selecteddestinationService: SelecteddestinationService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.selecteddestinationForm = this._form.selecteddestination({
      Day: new FormControl,
    });
  }

  onSubmit() {
    this._selecteddestinationService.createSelecteddestination(this.selecteddestinationForm.value).subscribe(data => {
      this._router.navigate(['/selecteddestinations']);
    });
  }

}
