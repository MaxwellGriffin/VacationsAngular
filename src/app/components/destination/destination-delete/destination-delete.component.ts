import { Component, OnInit } from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Destination } from 'src/app/models/destination';

@Component({
  selector: 'app-destination-delete',
  templateUrl: './destination-delete.component.html',
  styleUrls: ['./destination-delete.component.css']
})
export class DestinationDeleteComponent implements OnInit {

  destination: Destination;

  constructor(private _destinationService: DestinationsService, private _router: Router, private _activatedRoute: ActivatedRoute) { 
    this._activatedRoute.paramMap.subscribe(p => {
      this._destinationService.getDestination(p.get('id')).subscribe((singleDestination: Destination) => {
        this.destination = singleDestination;
      });
    });
  }

  onDeleteButtonClick(){
    this._destinationService.deleteDestination(this.destination.DestinationID).subscribe(()=> {
      this._router.navigate(['/destination']);
    });
  }

  ngOnInit() {
  }

}
