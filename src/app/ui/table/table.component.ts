import {Component, OnInit} from '@angular/core';
import {SearchServiceService} from '../../service/search-service.service';
import {ExcelService} from '../../service/excel.service';
import {UtileService} from '../../service/utile.service';
import {ExportLog} from '../../interface/ExportLog';
import {DatePipe} from '@angular/common';


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
      this.excelService.exportAsExcelFile(this.extracted(), 'aman');
    }
  }

  private extracted(): ExportLog[] {
    const exportedDate = <ExportLog[]>[];
    const pipe = new DatePipe('en-US');
    // map every LogDTO to Exported Log
    for (const dto of this.searchService.logsDTO) {
      const data = <ExportLog>{};
      data.sessionId = pipe.transform(dto.creationDate, 'short');
      data.terminalId = dto.terminalId;
      data.status = dto.status;
      data.bankName = dto.bankName;
      data.depositDate = pipe.transform(dto.depositDate, 'mediumDate');
      data.rejectionReason = dto.rejectionReason;
      data.transferAmount = dto.transferAmount;
      data.userName = dto.userName;
      exportedDate.push(data);
    }
    return exportedDate;
  }

  clear(): void {
    this.utilService.setClear();
    this.searchService.logsDTO = [] ;
  }
}
