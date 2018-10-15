import {Component, OnInit} from '@angular/core';
import { SearchServiceService } from '../../service/search-service.service';
import { LogDTO } from '../../interface/LogDTO';
import {ExcelService} from '../../service/excel.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

   transferlog: LogDTO [];
  constructor(public searchService: SearchServiceService, private excelService: ExcelService) {
   }


  ngOnInit() {
    this.transferlog = this.searchService.logsDTO;
  }

  previous(): void {
    this.searchService.doSearchPage(-1);
  }

  next(): void {
    this.searchService.doSearchPage(1);
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.searchService.logsDTO, 'aman');
  }
}
