import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from '../models/group';
import { Api_Url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class GroupService {

  constructor(private _http: HttpClient) { }

  getGroups() {
    return this._http.get(`${Api_Url}/Groups`,  { headers: this.getHeaders() });
  }

  createGroup(group: Group) {
    return this._http.post(`${Api_Url}/Groups`, group, { headers: this.getHeaders()});
  }

  getGroup(id: string) {
    return this._http.get(`${Api_Url}/Groups/${id}`, { headers: this.getHeaders() });
  }

  updateGroup(group: Group) {
    return this._http.put(`${Api_Url}/Groups`, group, {headers: this.getHeaders() });
  }

  deleteGroup(id: number){
    return this._http.delete(`${Api_Url}/Groups/${id}`, { headers: this.getHeaders() });
  }
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
