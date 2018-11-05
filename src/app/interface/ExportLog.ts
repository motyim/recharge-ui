export interface ExportLog {
  sessionId: Date;
  terminalId: string;
  status: string;
  bankName: string;
  fromDate: Date;
  toDate: Date;
  depositDate: Date;
  rejectionReason: string;
  transferAmount: number;
  userName: string;
}
