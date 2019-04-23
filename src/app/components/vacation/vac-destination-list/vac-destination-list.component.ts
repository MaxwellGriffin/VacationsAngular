import { Component, OnInit, Input } from '@angular/core';
import { DestinationsService } from '../../../services/destinations.service';
import { Destination } from '../../../models/destination';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vac-destination-list',
  templateUrl: './vac-destination-list.component.html',
  styleUrls: ['./vac-destination-list.component.css']
})
export class VacDestinationListComponent implements OnInit {

  constructor(private _destinationService: DestinationsService) { }

  columnNames: string[] = ['Name', 'Location', 'Price', 'Details', 'Add'];
  dataSource: MatTableDataSource<Destination>;

  @Input() destinations: Observable<any>;

  ngOnInit() {
    
  }
}