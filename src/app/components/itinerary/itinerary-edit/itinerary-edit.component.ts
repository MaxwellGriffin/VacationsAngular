 import { Component, OnInit } from '@angular/core';
import { Itinerary } from 'src/app/models/itinerary';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItinerarysService } from 'src/app/services/itinerarys.service';

@Component({
  selector: 'app-itinerary-edit',
  templateUrl: './itinerary-edit.component.html',
  styleUrls: ['./itinerary-edit.component.css']
})
export class ItineraryEditComponent implements OnInit {

  itinerary: Itinerary;

  editItineraryForm: FormGroup;

  constructor(
    private _form: FormBuilder,
    private _itineraryService: ItinerarysService,
    private _ar:ActivatedRoute,
    private _router: Router) {

      this._ar.paramMap.subscribe(p=>{
        this._itineraryService.getItinerary(p.get('id')).subscribe((singleItinerary:Itinerary)=>{
          this.itinerary = singleItinerary;
          this.createForm();
        })
      })

    }
  ngOnInit() {
  }

  createForm(){
    this.editItineraryForm = this._form.group({
        OwnerId: this.itinerary.OwnerID,
        ItineraryID: this.itinerary.ItineraryID,
        ItineraryName: new FormControl (this.itinerary.ItineraryName)

    });
  }

  onSubmit (form) {
    const updateItinerary: Itinerary = {
      ItineraryName:form.value.ItineraryName,
      ItineraryID:form.value.ItineraryID,
      OwnerID:form.value.OwnerID
    };

    this._itineraryService.updateItinerary(updateItinerary).subscribe(d =>{
      this._router.navigate(['itinerary']);
    });

  }
}
 