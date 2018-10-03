import {Component, OnInit} from '@angular/core';
import {SummuryService} from '../../service/summury.service';
import {Summary} from '../../interface/Summary';

@Component({
  selector: 'app-summry',
  templateUrl: './summry.component.html',
  styleUrls: ['./summry.component.css']
})
export class SummryComponent implements OnInit {

  summaryData: Summary;
  private uuid = 'c2f7c415-7107-4d3d-8c2f-bb43a3c4ca1a';

  constructor(private service: SummuryService) {
    this.service.getSummary(this.uuid).subscribe(x => {
      this.summaryData = x.data.summuryDto;
    });
  }

  ngOnInit() {
  }

}
