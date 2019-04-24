import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Selecteddestination } from '../models/selecteddestination';
import { Api_Url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SelecteddestinationService {

  constructor(private _http: HttpClient) { }

  getSelecteddestinations(itineraryId: string) {
    return this._http.get(`${Api_Url}/api/Selecteddestination?itineraryId=${itineraryId}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createSelecteddestination(object: Object) {
    console.log("createSelecteddestination called")
    return this._http.post(`${Api_Url}/api/Selecteddestination`, object, {headers: this.getHeaders()});
  }

  getSelecteddestination(id: string) {
    return this._http.get(`${Api_Url}/api/Selecteddestination/${id}`, { headers: this.getHeaders() });
  }

  updateSelecteddestination(selecteddestination: Selecteddestination) {
    return this._http.put(`${Api_Url}/api/selecteddestination`, selecteddestination, { headers: this.getHeaders() });
  }

  deleteSelecteddestination(id: number) {
    return this._http.delete(`${Api_Url}/api/Selecteddestination/${id}`, { headers: this.getHeaders() });
  }


}
