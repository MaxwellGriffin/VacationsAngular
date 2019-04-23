import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSelect, MatOption, MatTableDataSource } from '@angular/material';
import { GroupService } from 'src/app/services/group.service';
import { Group } from 'src/app/models/group';
import { Observable } from 'rxjs';
import { Itinerary } from 'src/app/models/itinerary';
import { ItinerarysService } from 'src/app/services/itinerarys.service';
import { Destination } from 'src/app/models/destination'
import { DestinationsService } from 'src/app/services/destinations.service';


@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit, AfterViewInit {

  constructor(private groupService: GroupService, private itineraryService: ItinerarysService, private destinationService: DestinationsService) { }   

  groupArray: Group[];
  itineraryArray: Itinerary[];
  destinationList: Observable<any>;

  public selectedGroup: number;
  public selectedItinerary: number;

  ready: boolean = false;

  dColumnNames: string[] = ['Name', 'Location', 'Price', 'Details', 'Add'];
  dDataSource: MatTableDataSource<Destination>;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.groupArray = this.getGroupsAsArray();
    this.itineraryArray = this.getItinerarysAsArray();
  }

  listDestinations(){
    console.log(`Selected group: ${this.selectedGroup}`);
    console.log(`Selected itinerary: ${this.selectedItinerary}`);

    this.destinationService.getFilteredDestinations(this.selectedGroup.toString(), this.selectedItinerary.toString()).subscribe((destinations: Destination[]) => {
      this.dDataSource = new MatTableDataSource<Destination>(destinations);
    });
    this.ready = true;
  }

  getGroupsAsArray() : Group[]{
    this.groupService.getGroups().subscribe((res : any[])=>{
    console.log(res);
    this.groupArray = res;
    });
    return this.groupArray;
  }

  getItinerarysAsArray() : Itinerary[]{
    this.itineraryService.getItinerarys().subscribe((res : any[])=>{
    console.log(res);
    this.itineraryArray = res;
    });
    return this.itineraryArray;
  }
}