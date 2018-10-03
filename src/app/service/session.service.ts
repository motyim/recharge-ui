import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private sessionID: string;

  constructor() {
  }

  setSessionId(sessionID: string): void {
    this.sessionID = sessionID;
  }

  getSessionId(): string {
    return this.sessionID;
  }

}
