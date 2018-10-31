import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Acknowledge} from '../interface/Acknowledge';
import {LogDTO} from '../interface/LogDTO';
import {LoginService} from './login.service';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {NGXLogger} from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  private serverURL = environment.baseUrl;
  logsDTO: LogDTO[] = [];
  logDTO: LogDTO;
  constructor(private http: HttpClient, private loginService: LoginService, private logger: NGXLogger) {}

  getStatus(): Observable<Acknowledge> {
    return this.http.get<Acknowledge>(this.serverURL + 'statuses', { withCredentials: true }).pipe(
      // @ts-ignore
      catchError((error: any, caught: Observable<HttpEvent<any>>) => this.loginService.errorHandler(error))
    );
  }

  getBanks(): Observable<Acknowledge> {
    return this.http.get<Acknowledge>(this.serverURL + 'banks', { withCredentials: true }).pipe(
      // @ts-ignore
      catchError((error: any, caught: Observable<HttpEvent<any>>) => {
        return this.loginService.errorHandler(error);
      })
    );
  }

  doSearch(logDTO: LogDTO): void {
    this.logger.info('DoSearch ' , logDTO);
    logDTO.pageNumber = 0;
    // make page size = -1 to get all data
    logDTO.pageSize = -1;
    this.logDTO = logDTO;
    this.http.post<Acknowledge>(this.serverURL + 'getLog', logDTO, { withCredentials: true }).subscribe(ack => {
      this.logsDTO = ack.data.logList;
    });
    this.logger.info('Finish do Search ');
  }

  getDates(logDTO: LogDTO) {
    this.logger.info('getDates ', logDTO);
    return this.http.post<Acknowledge>(this.serverURL + 'summury/date', logDTO, {withCredentials: true});
  }


  isempty(): boolean {
    return this.logsDTO.length === 0 ;
  }
}
