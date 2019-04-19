import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Destination } from '../models/destination';
import { Api_Url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class DestinationsService {

  constructor(private _http: HttpClient) { }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  getDestinations() {
    return this._http.get(`${Api_Url}/api/Destination`, { headers: this.getHeaders() });
  }

  getDestination(id: string){
    return this._http.get(`${Api_Url}/api/Destination/${id}`, { headers: this.getHeaders() });
  }

  createDestination(destination: Destination){
    return this._http.post(`${Api_Url}/api/Destination`, destination, { headers: this.getHeaders() });
  }

  updateDestination(destination: Destination){
    return this._http.put(`${Api_Url}/api/Destination`, destination, { headers: this.getHeaders() });
  }

  deleteDestination(id: number){
    return this._http.delete(`${Api_Url}/api/Destination/${id}`, { headers: this.getHeaders() });
  }
}