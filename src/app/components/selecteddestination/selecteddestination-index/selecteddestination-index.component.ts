import { Component, OnInit } from '@angular/core';
import { SelecteddestinationService } from '../../../services/selecteddestination.service';
import { Selecteddestination } from '../../../models/selecteddestination';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-selecteddestination-index',
  templateUrl: './selecteddestination-index.component.html',
  styleUrls: ['./selecteddestination-index.component.css']
})
export class SelecteddestinationIndexComponent implements OnInit {

  constructor(private _selecteddestinationService: SelecteddestinationService) { }

  columnNames = ['SelectedDestinationID', 'Day', 'ItineraryID', 'DestinationID' ]
  dataSource: MatTableDataSource<Selecteddestination>

  ngOnInit() {
    this._selecteddestinationService.getSelecteddestinations().subscribe((selecteddestinations: Selecteddestination[]) => {
      this.dataSource = new MatTableDataSource<Selecteddestination>(selecteddestinations);
  });

  }

}
