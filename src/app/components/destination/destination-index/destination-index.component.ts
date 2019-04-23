import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../../../services/destinations.service';
import { Destination } from '../../../models/destination';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-destination-index',
  templateUrl: './destination-index.component.html',
  styleUrls: ['./destination-index.component.css']
})
export class DestinationIndexComponent implements OnInit {

  constructor(private _destinationService: DestinationsService) { }

  columnNames: string[] = ['Region', 'TripType', 'Price', 'Name', 'MinGuests', 'MaxGuests', 'Location', 'buttons'];
  dataSource: MatTableDataSource<Destination>;

  ngOnInit() {
    this._destinationService.getDestinations().subscribe((destinations: Destination[]) => {
      this.dataSource = new MatTableDataSource<Destination>(destinations);
    });
  }
}