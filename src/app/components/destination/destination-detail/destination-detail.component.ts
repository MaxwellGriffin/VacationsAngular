import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationsService } from 'src/app/services/destinations.service';
import { Destination } from 'src/app/models/destination';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css']
})
export class DestinationDetailComponent implements OnInit {

  destination: Destination;

  constructor(private _activatedRoute: ActivatedRoute, private _destinationService: DestinationsService, private _router: Router) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._destinationService.getDestination(routeData.get('id')).subscribe((singleDestination: Destination) => {
        this.destination = singleDestination;
      });
    });
  }

  onEditButtonClick() {
    this._router.navigate([`/destination/edit/${this.destination.DestinationID}`]);
  }

}
