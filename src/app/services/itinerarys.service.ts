import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = "http://localhost:51594/api";

@Injectable({
  providedIn: 'root'
})

export class ItinerarysService {

  constructor(private _http: HttpClient) { }

  getItinerarys() {
    return this._http.get(`${ApiUrl}/Itinerary`, { headers: this.getHeaders() });
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
