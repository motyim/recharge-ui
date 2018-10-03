import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AmanResponse} from '../interface/AmanResponse';

@Injectable({
  providedIn: 'root'
})
export class SummuryService {
  private URL = 'http://10.140.173.16:15732/summury/';

  constructor(private http: HttpClient) {
  }

  getSummary(uuid: string) {
    return this.http.get<AmanResponse>(this.URL + uuid);
  }
}
