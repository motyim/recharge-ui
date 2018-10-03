export interface Summary {
  sessionId: string;
  processDate: number;
  totalProcessed: number;
  commitedTransfers: number;
  rejectedTransfers: number;
  duplicateTransfers: number;
}
