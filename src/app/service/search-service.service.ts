import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient, HttpEvent } from '@angular/common/http';
import { Acknowledge } from '../interface/Acknowledge';
import { LogDTO } from '../interface/LogDTO';
import { LoginService } from './login.service';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  private serverURL = environment.baseUrl;
  logsDTO: LogDTO[] = [];
  logDTO: LogDTO;
  constructor(private http: HttpClient, private loginService: LoginService) {
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
    logDTO.pageNumber = 0;

    this.http.post<Acknowledge>(this.serverURL + 'getLog', logDTO, { withCredentials: true }).pipe(
      // @ts-ignore
      catchError((error: any, caught: Observable<HttpEvent<any>>) => this.loginService.errorHandler(error))
    ).subscribe(ack => {
      // @ts-ignore
      this.logsDTO = ack.data.logList; console.log('shit again' + ack);
    });
  }

  doSearchPage(pageNumber: number): void {
    if (this.logDTO !== undefined) {
      this.logDTO.pageNumber = pageNumber;
      // @ts-ignore
      this.http.post<Acknowledge>(this.serverURL + 'getLog', logDTO, { withCredentials: true }).pipe(
        // @ts-ignore
        catchError((error: any, caught: Observable<HttpEvent<any>>) => this.loginService.errorHandler(error))
      ).subscribe(ack => {
        // @ts-ignore
        this.logsDTO = ack.data.logList; console.log('shit again' + ack);
      });
    }
  }
}
