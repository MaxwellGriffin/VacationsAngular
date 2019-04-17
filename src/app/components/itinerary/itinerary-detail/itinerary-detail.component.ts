import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Itinerary } from 'src/app/models/itinerary';
import { ItinerarysService } from 'src/app/services/itinerarys.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-itinerary-detail',
  templateUrl: './itinerary-detail.component.html',
  styleUrls: ['./itinerary-detail.component.css']
})
export class ItineraryDetailComponent implements OnInit {

  itinerary: Itinerary;

  constructor(private _activedRoute: ActivatedRoute, private _itineraryService: ItinerarysService){}

  ngOnInit() {
    this._activedRoute.paramMap.subscribe(routeData => {
      this._itineraryService.getItinerary(routeData.get('id')).subscribe((singleItinerary:Itinerary) => {
        this.itinerary = singleItinerary;
    });
  });
}
}
