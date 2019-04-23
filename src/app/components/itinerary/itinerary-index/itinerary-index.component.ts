import { Component, OnInit } from '@angular/core';
import { ItinerarysService } from '../../../services/itinerarys.service';
import { Itinerary } from '../../../models/itinerary';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-itinerary-index',
  templateUrl: './itinerary-index.component.html',
  styleUrls: ['./itinerary-index.component.css']
})
export class ItineraryIndexComponent implements OnInit {

  constructor(private _itineraryService: ItinerarysService) { }

  columnNames: string[] = [ 'Name', 'Region', 'buttons'];
  dataSource: MatTableDataSource<Itinerary>;

  ngOnInit() {
    this._itineraryService.getItinerarys().subscribe((itinerarys: Itinerary[]) => {
      this.dataSource = new MatTableDataSource<Itinerary>(itinerarys);
  });
}}