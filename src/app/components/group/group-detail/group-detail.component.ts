import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';


@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  group: Group;

  constructor(private _activatedRoute: ActivatedRoute, private _groupService: GroupService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._groupService.getGroup(routeData.get('id')).subscribe((singleGroup: Group) => {
        this.group = singleGroup;
      })
      console.log(routeData);
    })
  }

}
