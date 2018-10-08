import { Injectable } from '@angular/core';
import { User } from '../interface/User';
import { HttpClient } from '@angular/common/http';
import { Acknowledge } from '../interface/Acknowledge';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';
import { SessionStorageService } from 'ngx-webstorage';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverURL = environment.baseUrl;
  loggedIn: Boolean = false;
  public islogginSubject = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router, private session: SessionStorageService) { }

  doLogin(user: User): void {
    this.http.post<User>(this.serverURL + 'login', user, {withCredentials : true}).subscribe(loggedUser => {
      console.log(loggedUser);
      this.loggedIn = true;
      console.log('saved user ');
      console.log(user);
      this.setLoginSubject(true);
      this.session.store('user' , user );
      this.router.navigate(['/log']);
    });
  }

  isLoggedIn(): void {
    console.log('>>> this is loginIn Test ... ');
    this.http.get<Acknowledge>(this.serverURL + 'login', {withCredentials : true}).subscribe(ack => {
      console.log(ack);
      if (ack.data.loggedIn !== true) {
        console.log(ack.data.loggedIn);
        this.setLoginSubject(false);
        this.router.navigate(['/login']);
      }
    });
  }

  errorHandler(result): void {
    console.log('>>> Testing error hanlding' + result);
    console.log(result);
    if (result.error.data.loggedIn === false) {
      this.loggedIn = false;
      this.setLoginSubject(false);
      this.router.navigate(['/login']);
    }
  }

  setLoginSubject(value: boolean) {
    this.islogginSubject.next(value);
  }
}
