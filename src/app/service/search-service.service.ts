import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Acknowledge } from '../interface/Acknowledge';
import { LogDTO } from '../interface/LogDTO';
import { LoginService } from './login.service';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  private serverURL = environment.baseUrl;
  logsDTO: LogDTO[] = [];
  logDTO: LogDTO;
  exportDto: LogDTO[] = [];
  pageSize: number;
  pageNumber: number;
  constructor(private http: HttpClient, private loginService: LoginService, private logger: NGXLogger) {
    this.pageSize = 10;
    this.pageNumber = 0;
  }

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
    this.pageNumber = 0;
    logDTO.pageNumber = 0;
    logDTO.pageSize = -1;
    // make post request to get all record to be exported
    this.http.post<Acknowledge>(this.serverURL + 'getLog', logDTO, { withCredentials: true }).subscribe(ack => {
      this.exportDto = ack.data.logList;
    });
    logDTO.pageSize = 10;
    this.logDTO = logDTO;
    this.http.post<Acknowledge>(this.serverURL + 'getLog', logDTO, { withCredentials: true }).pipe(
      // @ts-ignore
      catchError((error: any, caught: Observable<HttpEvent<any>>) => this.loginService.errorHandler(error))
    ).subscribe(ack => {
      // @ts-ignore
      this.logsDTO = ack.data.logList;
    });
    this.logger.info('Finish do Search ');
  }

  doSearchPage(pageNumber: number): number {
    this.logger.info('DoSearchPage');
    this.logger.info('Page Number' + this.pageNumber);
    if (pageNumber > 0) {
      this.pageNumber += 1;
    } else {
      if (this.pageNumber > 0) {
        this.pageNumber -= 1;
      } else {
        this.pageNumber = 0;
      }
    }
    if (this.logDTO !== undefined) {
      this.logger.info('Page Number' + this.pageNumber);
      this.logDTO.pageNumber = this.pageNumber;
      this.http.post<Acknowledge>(this.serverURL + 'getLog', this.logDTO, { withCredentials: true }).pipe(
        // @ts-ignore
        catchError((error: any, caught: Observable<HttpEvent<any>>) => this.loginService.errorHandler(error))
      ).subscribe(ack => {
        this.logger.info('Data fetched page Number ' + this.pageNumber);
        // @ts-ignore
        if (ack.data.logList.length < 1) {
          this.pageNumber -= 1;
        } else {
          // @ts-ignore
          this.logsDTO = ack.data.logList;
        }
      });
      this.logger.info('Page Number' + this.pageNumber);
      return pageNumber;
    } else {
      this.logger.info('Page Number' + this.pageNumber);
      this.pageNumber = 0;
      return 0;
    }
  }
}
