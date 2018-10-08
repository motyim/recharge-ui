import { SummuryDTO } from './SummuryDTO';
import { LogDTO } from './LogDTO';
import { User } from './User';
import { Banks } from './Banks';
import { Status } from './Status';
export interface Data {
    uuid: string;
	summuryDto: SummuryDTO;
	logList: LogDTO[];
	user: User;
	banks: Banks[];
	statuses: Status[];
	loggedIn: Boolean;
}
