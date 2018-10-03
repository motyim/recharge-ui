export interface TransferLog {
  SessionID: number;
  BankName: string;
  TerminalID: number;
  TransferAmount: number;
  DepositAmount: number;
  DepositDate: string;
  Status: string;
  RejectionReason: string;
}
