import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GroupService } from 'src/app/services/group.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {

  

  ngOnInit() {
  }

  createForm() {
    this.editGroupForm = this._form.group({
      Name: new FormControl(this.group.Name),
      TripType: new FormControl(this.group.TripType),
      Region: new FormControl(this.group.Region),
      GuestCount: new FormControl(this.group.GuestCount),
    });
  }

  onSubmit(form) {
    const updateGroup: Group = {
      Name: form.value.Name,
      TripType: form.value.TripType,
      Region: form.value.Region,
      GuestCount: form.value.GuestCount
    };
    this._groupService.updateGroup(updateGroup).subscribe(d => {
      this._router.navigate(['/groups']);
    });
  }

  group: Group;

  editGroupForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _groupService: GroupService,
              private _ar: ActivatedRoute,
              private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._groupService.getGroup(p.get('id')).subscribe((singleGroup: Group) => {
        this.group = singleGroup;
        this.createForm();
      });
    }) ;         }
  }
