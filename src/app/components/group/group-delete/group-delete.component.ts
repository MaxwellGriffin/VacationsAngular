import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/models/group';

@Component({
  selector: 'app-group-delete',
  templateUrl: './group-delete.component.html',
  styleUrls: ['./group-delete.component.css']
})
export class GroupDeleteComponent implements OnInit {
  group: Group;

  constructor(private _groupService: GroupService, private _ar: ActivatedRoute, private _router: Router) { 
    this._ar.paramMap.subscribe(p => {
      this._groupService.getGroup(p.get('id')).subscribe((singleGroup: Group) => {
        this.group = singleGroup;
      });
    });
  }

  onDelete() {
    this._groupService.deleteGroup(this.group.GroupID).subscribe(() => {
      this._router.navigate(['.groups']);
    });
  }

  ngOnInit() {
  }

}
