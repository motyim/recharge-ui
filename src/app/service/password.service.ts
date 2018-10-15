import { Injectable } from '@angular/core';
import {Acknowledge} from '../interface/Acknowledge';
import {SessionService} from './session.service';
import {environment} from '../../environments/environment';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private serverURL = environment.baseUrl;

  constructor(private session: SessionService, private http: HttpClient) {
  }

  changePassword(newPassword: string) {
    const user = this.session.user;
    user.newPassword = newPassword;
    return this.http.post<Acknowledge>(this.serverURL + 'changePassword', user, {withCredentials: true});
  }
}
