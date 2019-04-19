import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createNodeAtIndex } from '@angular/core/src/render3/instructions';
import { Itinerary } from '../models/itinerary';
import { Api_Url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class ItinerarysService {

  constructor(private _http: HttpClient) { }

  getItinerarys() {
    return this._http.get(`${Api_Url}/Itinerary`, { headers: this.getHeaders() });
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

createItinerary(itinerary: Itinerary){
  return this._http.post(`${Api_Url}/Itinerary`, itinerary, {headers:this.getHeaders()});
}

getItinerary(id: string){
  return this._http.get(`${Api_Url}/Itinerary/${id}`,{headers:this.getHeaders()});
}

updateItinerary(itinerary: Itinerary){
  return this._http.put(`${Api_Url}/Itinerary`, itinerary, {headers:this.getHeaders()});
}

deleteItinerary(id: number){
  return this._http.delete(`${Api_Url}/Itinerary/${id}`,{headers:this.getHeaders()});
}

}