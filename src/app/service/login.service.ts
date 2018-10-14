import { Injectable } from '@angular/core';
import { User } from '../interface/User';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment';
import { SessionStorageService } from 'ngx-webstorage';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverURL = environment.baseUrl;
  private loggedIn = false;
  user: User;
  public islogginSubject = new Subject<boolean>();
  constructor(private http: HttpClient, private session: SessionStorageService) {}


  doLogin(user: User) {
    return this.http.post<User>(this.serverURL + 'login', user, {withCredentials : true});
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  errorHandler(result): void {
    console.log('>>> Testing error hanlding' + result);
    console.log(result);
    if (result.error.data == null || result.error.data.loggedIn === false) {
      this.setLogout();
    }
  }

  setLoginSubject(value: boolean) {
    this.islogginSubject.next(value);
  }

  setLogout(): void {
    this.loggedIn = false;
    this.setLoginSubject(false);
    this.session.clear();
    console.log(' Login service logout');
  }

  setUserLogin(loggedUser: User): void {
    this.loggedIn = true;
    this.user = loggedUser;
    this.setLoginSubject(true);
    this.session.store('user' , this.user );
    console.log('all user data are saved');
  }
}
