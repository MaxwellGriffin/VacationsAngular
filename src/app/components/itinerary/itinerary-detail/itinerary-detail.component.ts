import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Itinerary } from 'src/app/models/itinerary';

@Component({
  selector: 'app-itinerary-detail',
  templateUrl: './itinerary-detail.component.html',
  styleUrls: ['./itinerary-detail.component.css']
})
export class ItineraryDetailComponent implements OnInit {

  itinerary: Itinerary;
  
  constructor(private _activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activedRoute.paramMap.subscribe(routeData => {console.log(routeData);
    
    });
  }

}
