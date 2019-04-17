import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Destination } from '../models/destination';

const ApiUrl = "http://localhost:51594/api";

@Injectable({
  providedIn: 'root'
})

export class DestinationsService {

  constructor(private _http: HttpClient) { }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  getDestinations() {
    return this._http.get(`${ApiUrl}/Destination`, { headers: this.getHeaders() });
  }

  getDestination(id: string){
    return this._http.get(`${ApiUrl}/Destination/${id}`, { headers: this.getHeaders() });
  }

  createDestination(destination: Destination){
    return this._http.post(`${ApiUrl}/Destination`, destination, { headers: this.getHeaders() });
  }

  updateDestination(destination: Destination){
    return this._http.put(`${ApiUrl}/Destination`, destination, { headers: this.getHeaders() });
  }

  deleteDestination(id: number){
    return this._http.delete(`${ApiUrl}/Destination/${id}`, { headers: this.getHeaders() });
  }
}