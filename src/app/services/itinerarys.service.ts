import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createNodeAtIndex } from '@angular/core/src/render3/instructions';
import { Itinerary } from '../models/itinerary';

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

createItinerary(itinerary: Itinerary){
  return this._http.post('${apiUrl}/Itinerarys', itinerary, {headers:this.getHeaders()});

}

getItinerary(id: string){
  return this._http.get('${ApiUrl}/Itinerarys/${id}',{headers:this.getHeaders()});
}

}