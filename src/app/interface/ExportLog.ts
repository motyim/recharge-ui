export interface ExportLog {
  sessionId: string;
  terminalId: string;
  status: string;
  bankName: string;
  depositDate: string;
  rejectionReason: string;
  transferAmount: number;
  userName: string;
}
