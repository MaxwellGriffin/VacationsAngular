import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from '../models/group';


const ApiUrl = 'https://vacationsunitedwebapidnf2019.azurewebsites.net/api'

@Injectable({
  providedIn: 'root'
})

export class GroupService {

  constructor(private _http: HttpClient) { }

  getGroups() {
    return this._http.get(`${ApiUrl}/Groups`,  { headers: this.getHeaders() });
  }

  createGroup(group: Group) {
    return this._http.post(`${ApiUrl}/Groups`, group, { headers: this.getHeaders()});
  }

  getGroup(id: string) {
    return this._http.get(`${ApiUrl}/Groups/${id}`, { headers: this.getHeaders() });
  }

  updateGroup(group: Group) {
    return this._http.put(`${ApiUrl}/Groups`, group, {headers: this.getHeaders() });
  }

  deleteGroup(id: number){
    return this._http.delete(`${ApiUrl}/Groups/${id}`, { headers: this.getHeaders() });
  }
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
