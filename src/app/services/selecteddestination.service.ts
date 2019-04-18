import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Selecteddestination } from '../models/selecteddestination';

const ApiUrl = 'https://vacationsunitedwebapidnf2019.azurewebsites.net/'

@Injectable({
  providedIn: 'root'
})
export class SelecteddestinationService {

  constructor(private _http: HttpClient) { }

  getSelecteddestinations() {
    return this._http.get(`${ApiUrl}/Selecteddestination`, { headers: this.getSelecteddestinations() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createSelecteddestination(selecteddestination: Selecteddestination) {
    return this._http.post(`${ApiUrl}/Selecteddestinations`, selecteddestination, {headers: this.getHeaders()});
  }


}
