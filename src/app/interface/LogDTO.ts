export interface LogDTO {
    sessionId: string;
  terminalId: string;
  status: string;
  bankName: string;
  fromDate: Date;
  toDate: Date;
  pageNumber: number;
  depositDate: Date;
  rejectionReason: string;
  transferAmount: number;
  pageSize: number;
  userName: string;
  creationDate: Date;
}
