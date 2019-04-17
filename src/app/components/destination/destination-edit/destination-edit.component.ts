import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destination';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-destination-edit',
  templateUrl: './destination-edit.component.html',
  styleUrls: ['./destination-edit.component.css']
})
export class DestinationEditComponent implements OnInit {

  destination: Destination;
  editDestinationForm: FormGroup;

  constructor(private _destinationService: DestinationsService, 
    private _form: FormBuilder, 
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { 

      this._activatedRoute.paramMap.subscribe(p => {
        this._destinationService.getDestination(p.get('id')).subscribe((singleDestination: Destination) => {
          this.destination = singleDestination;
          this.createForm();
        })
      });
    }

  ngOnInit() {
  }

  createForm() {
    this.editDestinationForm = this._form.group({
      Name: new FormControl(this.destination.Name),
      Location: new FormControl(this.destination.Location),
      Price: new FormControl(this.destination.Price),
      MinGuests: new FormControl(this.destination.MinGuests),
      MaxGuests: new FormControl(this.destination.MaxGuests),
      TripType: new FormControl(this.destination.TripType),
      Region: new FormControl(this.destination.Region)
    });
  }

  onSubmit(form) {
    const updateDestination: Destination = {
      DestinationID: this.destination.DestinationID, //DestinationID doesn't get changed
      Name: form.value.Name,
      Location: form.value.Location,
      Price: form.value.Price,
      MinGuests: form.value.MinGuests,
      MaxGuests: form.value.MaxGuests,
      TripType: form.value.TripType,
      Region: form.value.Region
    };
    this._destinationService.updateDestination(updateDestination).subscribe(d => {
      this._router.navigate(['/destination']);
    });
  }

}
