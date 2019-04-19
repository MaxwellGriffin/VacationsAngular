import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api_Url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class DestinationsService {

  constructor(private _http: HttpClient) { }

  getDestinations() {
    return this._http.get(`${Api_Url}/Destination`, { headers: this.getHeaders() });
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
