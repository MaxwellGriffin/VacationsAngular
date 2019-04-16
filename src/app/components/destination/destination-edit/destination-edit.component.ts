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
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
