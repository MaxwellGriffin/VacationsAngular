import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from '../models/group';
import { Api_Url } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GroupService {

  groupArray: Group[];

  constructor(private _http: HttpClient) { }

  getGroups() {
    return this._http.get(`${Api_Url}/api/Group`,  { headers: this.getHeaders() });
  }

  // getGroupsAsArray() : Group[]{
  //   this._http.get(`${Api_Url}/api/Group`,  { headers: this.getHeaders() }).subscribe((res : any[])=>{
  //   console.log(res);
  //   this.groupArray = res;
  //   });
  //   return this.groupArray;
  // }

  createGroup(group: Group) {
    return this._http.post(`${Api_Url}/api/Group`, group, { headers: this.getHeaders()});
  }

  getGroup(id: string) {
    return this._http.get(`${Api_Url}/api/Group/${id}`, { headers: this.getHeaders() });
  }

  updateGroup(group: Group) {
    return this._http.put(`${Api_Url}/api/Group`, group, {headers: this.getHeaders() });
  }

  deleteGroup(id: number){
    return this._http.delete(`${Api_Url}/api/Group/${id}`, { headers: this.getHeaders() });
  }
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
