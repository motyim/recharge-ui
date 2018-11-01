import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchServiceService} from '../../service/search-service.service';
import {Status} from '../../interface/Status';
import {Banks} from '../../interface/Banks';
import {LogDTO} from '../../interface/LogDTO';
import {SessionService} from '../../service/session.service';
import {UtileService} from '../../service/utile.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  statuses: Status[] = [];
  banks: Banks[] = [];
  sessionId: string;
  terminalId: string;
  bankName: string;
  status: string;
  username: string;
  fromDate: Date;
  toDate: Date;
  logDTO: LogDTO ;

  constructor(private searchService: SearchServiceService, private session: SessionService,
              private utilService: UtileService) {
    this.sessionId = session.getSessionId();
    // @ts-ignore
    this.logDTO = {};
    this.utilService.getDateFilter().subscribe(message => {
      this.sessionId = message;
      this.search();
    });

    this.utilService.getClear().subscribe(message => {
      this.clearinputs();
    });
  }

  ngOnInit() {
    this.username = this.session.user.userName;
    this.getStatus();
    this.getBanks();
    this.search();
  }

  ngOnDestroy(): void {
    this.searchService.logsDTO = [] ;
  }

  getStatus(): void {
    this.searchService.getStatus().subscribe(acknowleadge =>
    this.statuses = acknowleadge.data.statuses);
  }

  getBanks(): void {
    this.searchService.getBanks().subscribe(acknowleadge =>
    this.banks = acknowleadge.data.banks);
  }

  search(): void {
    this.logDTO.sessionId = this.sessionId ;
    this.logDTO.terminalId = this.terminalId;
    this.logDTO.bankName = this.bankName;
    this.logDTO.status = this.status;
    this.logDTO.toDate = this.toDate;
    this.logDTO.fromDate = this.fromDate;
    this.logDTO.userName = this.username;
    this.searchService.doSearch(this.logDTO);
  }

  clearinputs() {
    this.sessionId = null;
    this.terminalId = null;
    this.toDate = null;
    this.fromDate = null;
    this.username = null;
  }

}
