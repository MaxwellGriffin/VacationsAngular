import { Component, OnInit } from '@angular/core';
import { SelecteddestinationService } from 'src/app/services/selecteddestination.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Selecteddestination } from 'src/app/models/selecteddestination';

@Component({
  selector: 'app-selecteddestination-delete',
  templateUrl: './selecteddestination-delete.component.html',
  styleUrls: ['./selecteddestination-delete.component.css']
})
export class SelecteddestinationDeleteComponent implements OnInit {
  selecteddestination: Selecteddestination;

  constructor(private _selecteddestinationService: SelecteddestinationService, private _ar: ActivatedRoute, private _router: Router) { 
    this._ar.paramMap.subscribe(p => {
      this._selecteddestinationService.getSelecteddestination(p.get('id')).subscribe((singleSelecteddestination: Selecteddestination) => {
        this.selecteddestination = singleSelecteddestination;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this._selecteddestinationService.deleteSelecteddestination(this.selecteddestination.SelectedDestinationID).subscribe(() => {
      this._router.navigate(['/selecteddestinations']);
    });
  }

}
