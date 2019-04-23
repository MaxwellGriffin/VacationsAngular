import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../../services/group.service';
import { Group } from '../../../models/group';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-group-index',
  templateUrl: './group-index.component.html',
  styleUrls: ['./group-index.component.css']
})
export class GroupIndexComponent implements OnInit {

  constructor(private _groupService: GroupService) { }

  columnNames = ['Region', 'TripType', 'GuestCount', 'Name', 'buttons'];
  dataSource: MatTableDataSource<Group>;

  ngOnInit() {
    this._groupService.getGroups().subscribe((groups: Group[]) => {
      this.dataSource = new MatTableDataSource<Group>(groups);

    });
  }
}
