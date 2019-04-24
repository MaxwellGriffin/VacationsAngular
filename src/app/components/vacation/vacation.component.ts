import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSelect, MatOption, MatTableDataSource } from '@angular/material';
import { GroupService } from 'src/app/services/group.service';
import { Group } from 'src/app/models/group';
import { Observable } from 'rxjs';
import { Itinerary } from 'src/app/models/itinerary';
import { ItinerarysService } from 'src/app/services/itinerarys.service';
import { Destination } from 'src/app/models/destination'
import { DestinationsService } from 'src/app/services/destinations.service';
import { Selecteddestination } from 'src/app/models/selecteddestination';
import { SelecteddestinationService } from 'src/app/services/selecteddestination.service';
import { DaydialogComponent } from '../daydialog/daydialog.component';
import { MatDialog, MatDialogConfig } from "@angular/material";


@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit, AfterViewInit {

  constructor(private groupService: GroupService,
    private itineraryService: ItinerarysService,
    private destinationService: DestinationsService,
    private selectedDestinationService: SelecteddestinationService,
    private dialog: MatDialog) { }

  groupArray: Group[];
  itineraryArray: Itinerary[];
  destinationList: Observable<any>;

  public selectedGroup: number;
  public selectedItinerary: number;

  ready: boolean = false;

  dColumnNames: string[] = ['Name', 'Location', 'Price', 'Details', 'Add'];
  dDataSource: MatTableDataSource<Destination>;
  sdColumnNames: string[] = ['Name', 'Location', 'Price', 'Details', 'Remove'];
  sdDataSource: MatTableDataSource<Selecteddestination>;

  tempDestinations: Destination[];
  tempSelectedDestinations: Selecteddestination[];

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.groupArray = this.getGroupsAsArray();
    this.itineraryArray = this.getItinerarysAsArray();
  }

  listDestinations() {
    console.log(`Selected group: ${this.selectedGroup}`);
    console.log(`Selected itinerary: ${this.selectedItinerary}`);

    this.destinationService.getFilteredDestinations(this.selectedGroup.toString(), this.selectedItinerary.toString()).subscribe((destinations: Destination[]) => {
      this.dDataSource = new MatTableDataSource<Destination>(destinations);
    });
    this.ready = true;
  }

  getSelectedDestinationsComprehensive() {
    this.selectedDestinationService.getSelecteddestinations().subscribe((selectedDestinations: Selecteddestination[]) => {
      this.tempSelectedDestinations = selectedDestinations;
    });
    this.destinationService.getDestinations().subscribe((destinations: Destination[]) => {
      this.tempDestinations = destinations;
    });

    let i, o: number;
    for (i = 0; i < this.tempSelectedDestinations.length; i++) {
      for (o = 0; o < this.tempDestinations.length; o++) {
        if (this.tempSelectedDestinations[i].DestinationID == this.tempDestinations[o].DestinationID) {
          this.tempSelectedDestinations[i].Region = this.tempDestinations[o].Region;
          this.tempSelectedDestinations[i].TripType = this.tempDestinations[o].TripType;
          this.tempSelectedDestinations[i].Price = this.tempDestinations[o].Price;
          this.tempSelectedDestinations[i].Name = this.tempDestinations[o].Name;
          this.tempSelectedDestinations[i].MinGuests = this.tempDestinations[o].MinGuests;
          this.tempSelectedDestinations[i].MaxGuests = this.tempDestinations[o].MaxGuests;
          this.tempSelectedDestinations[i].Location = this.tempDestinations[o].Location;
        }
      }
    }
    this.sdDataSource = new MatTableDataSource<Selecteddestination>(this.tempSelectedDestinations);
  }

  addButtonClick(id: number) {
    console.log(id);
    this.openDialog();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DaydialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(DaydialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        this.addSelectedDestination(data);
      });    
  }

  addSelectedDestination(day:number){
    console.log("Success");
  }

  getGroupsAsArray(): Group[] {
    this.groupService.getGroups().subscribe((res: any[]) => {
      console.log(res);
      this.groupArray = res;
    });
    return this.groupArray;
  }

  getItinerarysAsArray(): Itinerary[] {
    this.itineraryService.getItinerarys().subscribe((res: any[]) => {
      console.log(res);
      this.itineraryArray = res;
    });
    return this.itineraryArray;
  }
}