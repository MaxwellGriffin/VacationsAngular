import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = "http://localhost:51594/api";

@Injectable({
  providedIn: 'root'
})

export class DestinationsService {

  constructor(private _http: HttpClient) { }

  getDestinations() {
    return this._http.get(`${ApiUrl}/Destination`, { headers: this.getHeaders() });
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

