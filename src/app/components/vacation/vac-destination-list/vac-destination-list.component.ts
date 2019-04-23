import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../../../services/destinations.service';
import { Destination } from '../../../models/destination';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-vac-destination-list',
  templateUrl: './vac-destination-list.component.html',
  styleUrls: ['./vac-destination-list.component.css']
})
export class VacDestinationListComponent implements OnInit {

  constructor(private _destinationService: DestinationsService) { }

  columnNames: string[] = ['Name', 'Location', 'Price', 'Details', 'Add'];
  dataSource: MatTableDataSource<Destination>;

  ngOnInit() {
    this._destinationService.getDestinations().subscribe((destinations: Destination[]) => {
      this.dataSource = new MatTableDataSource<Destination>(destinations);
    });
  }
}