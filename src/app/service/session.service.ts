import {Injectable} from '@angular/core';
import {User} from '../interface/User';
import {SessionStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private sessionID: string;
  constructor(private sessionStorage: SessionStorageService) {
  }

  private _user: User;

  private _sessionCreation: Date;

  get sessionCreation(): Date {
    return this._sessionCreation;
  }

  set sessionCreation(value: Date) {
    this._sessionCreation = value;
  }

  setSessionId(sessionID: string): void {
    this.sessionID = sessionID;
  }

  getSessionId(): string {
    return this.sessionID;
  }


  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  save(user: User): void {
    this.sessionStorage.store('user' , user);
    this._user = user;
  }
  clear(): void {
    this.user = null;
    this.sessionStorage.clear();
  }

  getUserTerminal(): string {
    return this.user.terminalId;
  }
}
