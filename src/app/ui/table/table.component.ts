import {Component, OnInit} from '@angular/core';
import {TransferLog} from '../../interface/TransferLog';
import {TransferlogService} from '../../service/transferlog.service';
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
  //  pageNumber: number;
  constructor(private transferlogService: TransferlogService
    , public searchService: SearchServiceService, private excelService: ExcelService) {
    // this.pageNumber = 0;
   }


  ngOnInit() {
    this.transferlog = this.searchService.logsDTO;
  }

  previous(): void {
    // console.log('Test Pervious' + this.pageNumber);
    // this.pageNumber === 0 ? this.pageNumber = 0 : this.pageNumber = this.pageNumber - 1 ;
    // console.log('Test Pervious' + this.pageNumber);
    this.searchService.doSearchPage(-1);
    // console.log('Test Pervious' + this.pageNumber);
  }

  next(): void {
    // console.log('Test Next' + this.pageNumber);
    // this.pageNumber = this.pageNumber + 1;
    // console.log('Test Next' + this.pageNumber);
    this.searchService.doSearchPage(1);
    // console.log('Test Next' + this.pageNumber);
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.searchService.logsDTO, 'aman');
  }
}
