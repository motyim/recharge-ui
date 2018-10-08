export interface SummuryDTO {
 sessionId: string;
 processDate: Date;
 totalProcessed: number;
 commitedTransfers: number;
 rejectedTransfers: number;
 duplicateTransfers: number;
}
