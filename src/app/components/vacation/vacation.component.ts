import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSelect, MatOption, MatTableDataSource } from '@angular/material';
import { GroupService } from 'src/app/services/group.service';
import { Group } from 'src/app/models/group';
import { Observable } from 'rxjs';
import { Itinerary } from 'src/app/models/itinerary';
import { ItinerarysService } from 'src/app/services/itinerarys.service';


@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit, AfterViewInit {

  constructor(private groupService: GroupService, private itineraryService: ItinerarysService) { }   

  groupArray: Group[];
  itineraryArray: Itinerary[];

  selectedGroup: number;
  selectedItinerary: number;

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.groupArray = this.getGroupsAsArray();
    this.itineraryArray = this.getItinerarysAsArray();
  }

  printSelectedGroup(){
    console.log(`Selected group: ${this.selectedGroup}`);
  }

  printSelectedItinerary(){
    console.log(`Selected itinerary: ${this.selectedItinerary}`);
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
