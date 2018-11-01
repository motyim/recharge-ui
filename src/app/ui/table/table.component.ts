import {Component, OnInit} from '@angular/core';
import {SearchServiceService} from '../../service/search-service.service';
import {ExcelService} from '../../service/excel.service';
import {UtileService} from '../../service/utile.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  page: number ;

  constructor(public searchService: SearchServiceService, private excelService: ExcelService
    , private utilService: UtileService) {
    this.page = 1;
  }

  ngOnInit() {}

  exportAsXLSX(): void {
    if (!this.searchService.isempty() ) {
        this.excelService.exportAsExcelFile(this.searchService.logsDTO, 'aman');
    }
  }

  clear(): void {
    this.utilService.setClear();
    this.searchService.logsDTO = [] ;
  }
}
