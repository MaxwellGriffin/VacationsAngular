import { Component, OnInit } from '@angular/core';
import { ItinerarysService } from 'src/app/services/itinerarys.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Itinerary } from 'src/app/models/itinerary';

@Component({
  selector: 'app-itinerary-delete',
  templateUrl: './itinerary-delete.component.html',
  styleUrls: ['./itinerary-delete.component.css']
})
export class ItineraryDeleteComponent implements OnInit {

  itinerary: Itinerary;
  
  constructor(private _itineraryService: ItinerarysService, private _ar:ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._itineraryService.getItinerary(p.get('id')).subscribe((singleItinerary: Itinerary) => {
        this.itinerary = singleItinerary;
      });
    });
  }

  OnDelete() {
    this._itineraryService.deleteItinerary(this.itinerary.ItineraryID).subscribe(() =>{
      this._router.navigate(['/itinerary']);
    });
  }

  ngOnInit() {
  }

}
