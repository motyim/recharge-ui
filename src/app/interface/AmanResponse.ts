import {Data} from './Data';

export interface AmanResponse {
  statusCode: number;
  statusMessage: string;
  data: Data;
}
