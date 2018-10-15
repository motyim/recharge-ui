import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SessionService} from './session.service';
import { environment } from '../../environments/environment';
import {Acknowledge} from '../interface/Acknowledge';

@Injectable({
  providedIn: 'root'
})
export class SummuryService {
  private URL = environment.baseUrl + 'summury/';

  constructor(private http: HttpClient, private session: SessionService) {
  }

  getSummary() {
    return this.http.get<Acknowledge>(this.URL + this.session.getSessionId(), {withCredentials : true});
  }
}
