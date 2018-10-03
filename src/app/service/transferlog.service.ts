import {Injectable} from '@angular/core';
import {TransferLog} from '../interface/TransferLog';

@Injectable({
  providedIn: 'root'
})
export class TransferlogService {

  private logs: TransferLog[] = [
    {
      SessionID: 12,
      BankName: 'CIB',
      TerminalID: 8085,
      TransferAmount: 1200,
      DepositAmount: 1200,
      DepositDate: '18-01-2019',
      Status: 'true',
      RejectionReason: 'reason',
    },
    {
      SessionID: 12,
      BankName: 'CIB',
      TerminalID: 8085,
      TransferAmount: 1200,
      DepositAmount: 1200,
      DepositDate: '18-01-2019',
      Status: 'true',
      RejectionReason: 'reason',
    },
    {
      SessionID: 12,
      BankName: 'CIB',
      TerminalID: 8085,
      TransferAmount: 1200,
      DepositAmount: 1200,
      DepositDate: '18-01-2019',
      Status: 'true',
      RejectionReason: 'reason',
    },
    {
      SessionID: 12,
      BankName: 'CIB',
      TerminalID: 8085,
      TransferAmount: 1200,
      DepositAmount: 1200,
      DepositDate: '18-01-2019',
      Status: 'true',
      RejectionReason: 'reason',
    }
  ];

  constructor() {
  }

  getLog(): TransferLog[] {
    return this.logs;
  }
}
