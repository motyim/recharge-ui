import {Injectable} from '@angular/core';
import {User} from '../interface/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Subject} from 'rxjs/Subject';
import {SessionService} from './session.service';
import {NGXLogger} from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverURL = environment.baseUrl;
  private loggedIn = false;
  public islogginSubject = new Subject<boolean>();
  constructor(private http: HttpClient, private session: SessionService, private logger: NGXLogger) {}

  doLogin(user: User) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('username', user.userName)
      .set('password', user.password);
    // return this.http.post(this.serverURL + 'login', user, {withCredentials : true, observe: 'response' });
    return this.http.post(this.serverURL + 'login', user, {withCredentials: true, observe: 'response', headers: headers});
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  errorHandler(result): void {
    this.logger.info('Testing error hanlding' , result);
    if (result.error.data == null || result.error.data.loggedIn === false) {
      this.setLogout();
    }
  }

  setLoginSubject(value: boolean) {
    this.islogginSubject.next(value);
  }

  setLogout(): void {
    this.session.clear();
    this.loggedIn = false;
    this.setLoginSubject(false);
    this.logger.info('Login service logout');
  }

  setUserLogin(loggedUser: User): void {
    this.session.save(loggedUser);
    this.loggedIn = true;
    this.setLoginSubject(true);
    this.logger.info('User Loged In Successfully');
  }

}
