import {Component, OnInit} from '@angular/core';
import {TransferLog} from '../../interface/TransferLog';
import {TransferlogService} from '../../service/transferlog.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  transferlog: TransferLog [];

  constructor(private transferlogService: TransferlogService) {
  }

  ngOnInit() {
    this.transferlog = this.transferlogService.getLog();
  }

}
