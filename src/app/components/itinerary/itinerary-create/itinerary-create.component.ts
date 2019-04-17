import { Component, OnInit } from '@angular/core';
import {ItinerarysService} from '../../../services/itinerarys.service';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-itinerary-create',
  templateUrl: './itinerary-create.component.html',
  styleUrls: ['./itinerary-create.component.css']
})
export class ItineraryCreateComponent implements OnInit {

  itineraryForm: FormGroup;

  constructor(private _itinerary: ItinerarysService, private _form: FormBuilder, private _router: Router) { this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.itineraryForm = this._form.group({
      ItineraryName: new FormControl
    });
  }

    onSubmit() {
  this._itinerary.createItinerary(this.itineraryForm.value).subscribe(data => {
      this._router.navigate(['/itinerary']);
  });

  }
}