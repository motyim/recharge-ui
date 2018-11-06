import {Component, OnInit} from '@angular/core';
import {SummuryService} from '../../service/summury.service';
import {SummuryDTO} from '../../interface/SummuryDTO';
import {SessionService} from '../../service/session.service';

@Component({
  selector: 'app-summry',
  templateUrl: './summry.component.html',
  styleUrls: ['./summry.component.css']
})
export class SummryComponent implements OnInit {

  summaryData: SummuryDTO;

  constructor(private service: SummuryService, private session: SessionService) {
    this.service.getSummary().subscribe(x => {
      // @ts-ignore
      this.summaryData = x.data.summuryDto;
      session.sessionCreation = this.summaryData.creationDate;
    });
  }

  ngOnInit() {
  }

}
