import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {AmanResponse} from '../interface/AmanResponse';
import {SessionService} from './session.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SummuryService {
  // private URL = 'http://10.140.173.16:15732/summury/';
  private URL = environment.baseUrl + 'summury/';

  constructor(private http: HttpClient, private session: SessionService,
  private loginService: LoginService) {
  }

  getSummary() {
    return this.http.get<AmanResponse>(this.URL + this.session.getSessionId(), {withCredentials : true}).pipe(
      // @ts-ignore
      catchError((error: any, caught: Observable<HttpEvent<any>>) => this.loginService.errorHandler(error))
    );
  }
}
