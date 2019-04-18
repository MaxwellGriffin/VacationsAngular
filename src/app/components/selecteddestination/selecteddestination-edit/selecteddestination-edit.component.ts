import { Component, OnInit } from '@angular/core';
import { Selecteddestination } from 'src/app/models/selecteddestination';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SelecteddestinationService } from 'src/app/services/selecteddestination.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selecteddestination-edit',
  templateUrl: './selecteddestination-edit.component.html',
  styleUrls: ['./selecteddestination-edit.component.css']
})
export class SelecteddestinationEditComponent implements OnInit {

  selecteddestination: Selecteddestination;

  editSelecteddestinationForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _selecteddestinationService: SelecteddestinationService,
              private _ar: ActivatedRoute,
              private _router: Router) {
               
      this._ar.paramMap.subscribe(p => {
        this._selecteddestinationService.getSelecteddestination(p.get('id')).subscribe((singleSelecteddestination: Selecteddestination) => {
          this.selecteddestination = singleSelecteddestination;
          this.createForm();
        });
      });
    }

  ngOnInit() {
  }

  createForm() {
    this.editSelecteddestinationForm = this._form.group({
      Day: new FormControl(this.selecteddestination.Day)
       
    });
  }

  onSubmit(form) {
    const updateSelecteddestination: Selecteddestination = {
      Day: form.value.Day
    };
    this._selecteddestinationService.updateSelecteddestination(updateSelecteddestination).subscribe(d => {
      this._router.navigate(['/selecteddestinations']);
    });
  }

}
