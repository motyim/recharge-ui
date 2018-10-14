import {Injectable} from '@angular/core';
import { User } from '../interface/User';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Acknowledge } from '../interface/Acknowledge';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private sessionID: string;
  private serverURL = environment.baseUrl;

  constructor(private http: HttpClient, private loginService: LoginService
                , private router: Router) {
  }

  setSessionId(sessionID: string): void {
    this.sessionID = sessionID;
  }

  getSessionId(): string {
    return this.sessionID;
  }

  submit(user: User): void {
    console.log('Test config');
    this.http.post<Acknowledge>(this.serverURL + 'config', user, {withCredentials : true}).pipe(
      // @ts-ignore
      catchError((error: any, caught: Observable<HttpEvent<any>>) => this.loginService.errorHandler(error))
    ).subscribe(ack => {
      console.log('Test config');
      // @ts-ignore
      if (ack.data.loggedIn === true) {
        // @ts-ignore
        this.loginService.user = ack.data.user;
        this.router.navigateByUrl('log');
      } else {
        console.log('Test config');
        this.router.navigateByUrl('login');
      }
    });
  }

  changePassword(newPassword: string): void {
    const user = this.loginService.user;
    user.newPassword = newPassword;
    this.http.post<Acknowledge>(this.serverURL + 'changePassword', user, {withCredentials : true}).pipe(
      // @ts-ignore
      catchError((error: any, caught: Observable<HttpEvent<any>>) => this.loginService.errorHandler(error))
    ).subscribe(ack => {
      // @ts-ignore
      if (ack.data.loggedIn === true) {
        // @ts-ignore
        this.loginService.user = ack.data.user;
        this.router.navigateByUrl('log');
      } else {
        this.router.navigateByUrl('login');
      }
    });
  }

}
