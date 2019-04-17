import { Component, OnInit } from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-destination-create',
  templateUrl: './destination-create.component.html',
  styleUrls: ['./destination-create.component.css']
})
export class DestinationCreateComponent implements OnInit {

  destinationForm: FormGroup;

  constructor(private _destinationService: DestinationsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.destinationForm = this._form.group({
      Region: new FormControl,
      TripType: new FormControl,
      Price: new FormControl,
      Name: new FormControl,
      MinGuests: new FormControl,
      MaxGuests: new FormControl,
      Location: new FormControl
    });
  }

  onSubmit(){
    this._destinationService.createDestination(this.destinationForm.value).subscribe(data => {
      this._router.navigate(['/destination']);
    })
  }

}
