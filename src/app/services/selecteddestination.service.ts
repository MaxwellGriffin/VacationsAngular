import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Selecteddestination } from '../models/selecteddestination';
import { Api_Url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SelecteddestinationService {

  constructor(private _http: HttpClient) { }

  getSelecteddestinations() {
    return this._http.get(`${Api_Url}/Selecteddestination`, { headers: this.getSelecteddestinations() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createSelecteddestination(selecteddestination: Selecteddestination) {
    return this._http.post(`${Api_Url}/Selecteddestinations`, selecteddestination, {headers: this.getHeaders()});
  }

  getSelecteddestination(id: string) {
    return this._http.get(`${Api_Url}/Selecteddestination/${id}`, { headers: this.getHeaders() });
  }

  updateSelecteddestination(selecteddestination: Selecteddestination) {
    return this._http.put(`${Api_Url}/selecteddestination`, selecteddestination, { headers: this.getHeaders() });
  }

  deleteSelecteddestination(id: number) {
    return this._http.delete(`${Api_Url}/Selecteddestinations/${id}`, { headers: this.getHeaders() });
  }


}
