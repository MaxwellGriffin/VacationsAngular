import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../../services/group.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.css']
})
export class GroupCreateComponent implements OnInit {

  groupForm: FormGroup;

  constructor(private _groupService: GroupService, private _form: FormBuilder, private _router: Router ){
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.groupForm = this._form.group({
      TripType: new FormControl,
      GuestCount: new FormControl,
      OwnerID: localStorage.getItem('userId'),
      Name: new FormControl  
    });

  }

    onSubmit() {
      this._groupService.createGroup(this.groupForm.value).subscribe(data => {
        this._router.navigate(['/group']);
      });
    }
  }
