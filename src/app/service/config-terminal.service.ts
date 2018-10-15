import { Injectable } from '@angular/core';
import {User} from '../interface/User';
import {Acknowledge} from '../interface/Acknowledge';
import {environment} from '../../environments/environment';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigTerminalService {

  private serverURL = environment.baseUrl;

  constructor( private http: HttpClient) { }

  submit(user: User) {
     return this.http.post<Acknowledge>(this.serverURL + 'config', user, {withCredentials : true});
  }
}
