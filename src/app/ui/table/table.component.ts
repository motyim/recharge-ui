import {Component, OnInit} from '@angular/core';
import { SearchServiceService } from '../../service/search-service.service';
import {ExcelService} from '../../service/excel.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  page: number ;

  constructor(public searchService: SearchServiceService, private excelService: ExcelService) {
    this.page = 1;
  }

  ngOnInit() {}

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.searchService.logsDTO, 'aman');
  }

  clear(): void {
    this.searchService.logsDTO = [] ;
  }
}
