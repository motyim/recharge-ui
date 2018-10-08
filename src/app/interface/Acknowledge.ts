import { Data } from './Data';

export interface Acknowledge {
    statusCode: string;
    statusMessage: string;
    data: Data;
  }
