import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Selecteddestination } from 'src/app/models/selecteddestination';

@Component({
  selector: 'app-selecteddestination-detail',
  templateUrl: './selecteddestination-detail.component.html',
  styleUrls: ['./selecteddestination-detail.component.css']
})
export class SelecteddestinationDetailComponent implements OnInit {

  selecteddestination: Selecteddestination;
  _selecteddestinationService: any;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._selecteddestinationService.getSelecteddestination(routeData.get('id')).subscribe((singleSelecteddestination: Selecteddestination) => {
        this.selecteddestination = singleSelecteddestination;
      });
    });
  }

}
